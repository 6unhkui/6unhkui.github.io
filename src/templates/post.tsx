import React, { useState, useEffect } from "react";
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby";
import SEO from "components/SEO";
import Layout from "components/Layout/Layout";
import TableOfContents from "components/Post/TableOfContents";
import PostComment from "components/Post/PostComment";
import { PostSinglePageQuery, SitePageContext } from "graphql-types";

const HEADER_OFFSET_Y = 100;

interface PostSingleProps {
    data: PostSinglePageQuery;
    pageContext: SitePageContext;
    location: Location;
}

const PostSingle: React.FC<PostSingleProps> = ({ data, pageContext, location }) => {
    const [currentHeaderUrl, setCurrentHeaderUrl] = useState<string | undefined>(undefined);
    const { previous, next } = pageContext;

    const thumbnailSrc = data.markdownRemark?.frontmatter?.featuredImage?.childImageSharp?.original?.src;

    const handleScroll = () => {
        let aboveHeaderUrl; // 화면 바로 위에 위치한 header
        const currentOffsetY = window.pageYOffset;
        const headerElements: NodeListOf<HTMLLinkElement> = document.querySelectorAll(".anchor-header");

        for (const elem of headerElements) {
            const { top } = elem.getBoundingClientRect();
            const elemTop = top + currentOffsetY;
            const isLast = elem === headerElements[headerElements.length - 1];

            if (currentOffsetY < elemTop - HEADER_OFFSET_Y) {
                aboveHeaderUrl && setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1]);
                !aboveHeaderUrl && setCurrentHeaderUrl(undefined);
                break;
            } else {
                isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1]);
                !isLast && (aboveHeaderUrl = elem.href);
            }
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll, false);
        return () => {
            document.removeEventListener("scroll", handleScroll, false);
        };
    }, []);

    return (
        <Layout location={location}>
            <SEO
                title={data.markdownRemark?.frontmatter?.title || ""}
                description={data.markdownRemark?.excerpt || ""}
                imageSrc={thumbnailSrc || ""}
                article={true}
            />

            <section className="post-view">
                <div className="featured-image" style={{ backgroundImage: thumbnailSrc ? `url(${thumbnailSrc})` : "" }}>
                    <div className="post-info-wrap">
                        <div className="post-info container">
                            {data.markdownRemark?.frontmatter?.category && (
                                <span className="category">{data.markdownRemark?.frontmatter?.category}</span>
                            )}
                            {data.markdownRemark?.frontmatter?.title && (
                                <h1 className="title">{data.markdownRemark?.frontmatter?.title}</h1>
                            )}
                            <span className="meta-data">
                                by <span className="writer">{data.site?.siteMetadata?.author}</span>
                                {` ∙  ${data.markdownRemark?.frontmatter?.date}`}
                            </span>
                            <div className="tags-wrap">
                                {data.markdownRemark?.frontmatter?.tags?.map((tag, i) => (
                                    <Link to={`/tags/${kebabCase(tag || "")}/`} className="tag" key={i}>
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <TableOfContents items={data.markdownRemark?.tableOfContents || ""} currentHeaderUrl={currentHeaderUrl} />

                    <article>
                        <div className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html || "" }} />

                        <hr className="end-line" />

                        <div className="navigation-wrap">
                            {previous && (
                                <div className="navigation previous">
                                    <p>Previous</p>
                                    <Link to={previous?.fields?.slug || ""} rel="prev">
                                        ← {previous?.frontmatter?.title}
                                    </Link>
                                </div>
                            )}

                            {next && (
                                <div className="navigation next">
                                    <p>Next</p>
                                    <Link to={next?.fields?.slug || ""} rel="next">
                                        {next?.frontmatter?.title} →
                                    </Link>
                                </div>
                            )}
                        </div>

                        <PostComment repo="6unhkui/6unhkui.github.io" />
                    </article>
                </div>
            </section>
        </Layout>
    );
};

export default PostSingle;

export const pageQuery = graphql`
    query PostSinglePage($slug: String!) {
        site {
            siteMetadata {
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            id
            excerpt(pruneLength: 160)
            html
            tableOfContents
            frontmatter {
                title
                date(formatString: "MMMM DD, yyyy")
                category
                tags
                featuredImage {
                    childImageSharp {
                        original {
                            src
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`;
