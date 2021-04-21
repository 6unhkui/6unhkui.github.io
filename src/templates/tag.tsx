import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import PageTitle from "components/PageTitle";
import PostCard from "components/Post/PostCard";
import { MarkdownRemark, SitePageContext, TagPageQuery } from "graphql-types";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";

interface TagProps {
    pageContext: Pick<SitePageContext, "tag">;
    data: TagPageQuery;
    location: Location;
}

const Tag: React.FC<TagProps> = ({ pageContext, data, location }) => {
    const { tag } = pageContext;
    const {
        allMarkdownRemark: { edges }
    } = data;
    const { data: posts, count } = useInfiniteScroll({ limit: 6, items: edges });

    return (
        <Layout location={location}>
            <SEO title={tag || ""} />
            <div className="tags-page-wrap">
                <PageTitle
                    title={tag || ""}
                    subTxt={[`${data.allMarkdownRemark.totalCount} post${data.allMarkdownRemark.totalCount === 1 ? "" : "s"}`]}
                />

                <section className="posts-wrap">
                    <div className="container">
                        {posts.slice(0, count).map((post, i) => (
                            <PostCard data={post.node as MarkdownRemark} key={i} />
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Tag;

export const pageQuery = graphql`
    query TagPage($tag: String!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        tags
                        category
                        featuredImage {
                            childImageSharp {
                                resize(width: 700) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
