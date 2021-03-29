import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import PageTitle from "components/PageTitle";
import PostCard from "components/Post/PostCard";
import InfinitiScroll from "utils/infiniteScroll";
import { MarkdownRemark, TagPageQuery } from "graphql-types";

const SHOW_COUNT = 6;

interface TagProps {
    pageContext: {
        tag: string;
    };
    data: TagPageQuery;
    location: Location;
}

const Tag: React.FC<TagProps> = ({ pageContext, data, location }) => {
    const { tag } = pageContext;
    const [postsToShow, setPostsToShow] = useState(SHOW_COUNT);
    const {
        allMarkdownRemark: { edges: posts }
    } = data;

    useEffect(() => {
        const _infiniteScroll = InfinitiScroll.bind(null, () => setPostsToShow(state => state + SHOW_COUNT));

        document.addEventListener("scroll", _infiniteScroll, false);
        return () => {
            document.removeEventListener("scroll", _infiniteScroll, false);
        };
    }, []);

    return (
        <Layout location={location}>
            <SEO title={tag} />
            <div className="tags-page-wrap">
                <PageTitle
                    title={tag}
                    subTxt={[`${data.allMarkdownRemark.totalCount} post${data.allMarkdownRemark.totalCount === 1 ? "" : "s"}`]}
                />

                <section className="posts-wrap">
                    <div className="container">
                        {posts.slice(0, postsToShow).map((post, i) => (
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
