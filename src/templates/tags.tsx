import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Index from "../components/Layout";
import SEO from "../components/seo";
import PageTitle from "../components/Layout/pageTitle";
import { Edge } from "../interfaces/PostList";
import PostSingle from "../components/Post/postSingle";
import InfinitiScroll from "../utils/infiniteScroll";

interface Props {
    pageContext: {
        tag: string;
    };
    data: {
        allMarkdownRemark: {
            totalCount: number;
            edges: Edge[];
        };
    };
    location: Location;
}

const SHOW_COUNT = 6;

const Tags: React.FC<Props> = ({ pageContext, data, location }) => {
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
        <Index location={location}>
            <SEO title={tag} />
            <div className="tags-page-wrap">
                <PageTitle
                    title={tag}
                    subTxt={[`${data.allMarkdownRemark.totalCount} post${data.allMarkdownRemark.totalCount === 1 ? "" : "s"}`]}
                />

                <section className="posts-wrap">
                    <div className="container">
                        {posts.slice(0, postsToShow).map((post, i) => (
                            <PostSingle data={post} key={i} />
                        ))}
                    </div>
                </section>
            </div>
        </Index>
    );
};

export default Tags;

export const pageQuery = graphql`
    query($tag: String) {
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
