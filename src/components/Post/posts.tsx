import React from "react";
import Tab from "components/Filter/Tab";
import Search from "components/Filter/Search";
import PostCard from "./PostCard";
import { MarkdownRemark, PostsInfoFragment } from "graphql-types";
import { graphql } from "gatsby";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";

interface PostsProps {
    data: PostsInfoFragment | undefined;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
    if (!data) {
        return (
            <section className="posts-wrap">
                <div className="posts container">
                    <div className="empty">게시글이 존재하지 않습니다.</div>
                </div>
            </section>
        );
    }

    const { edges: allPosts, categories } = data;
    const {
        data: posts,
        count,
        keyword,
        selectedCategory,
        onChangeKeyword,
        onChangeSelectedCategory,
        categoryItems
    } = useInfiniteScroll({
        limit: 6,
        items: allPosts,
        initCategories: categories.filter(v => typeof v.fieldValue !== undefined).map(v => v.fieldValue) as string[]
    });

    return (
        <section className="posts-wrap">
            <div className="posts container">
                <div className="filter-wrap">
                    <Tab items={categoryItems} selectedItem={selectedCategory} onChange={onChangeSelectedCategory} />
                    <Search onChange={onChangeKeyword} value={keyword} />
                </div>

                <div style={{ margin: 0 }}>
                    {posts.length > 0 ? (
                        posts.slice(0, count).map((post, i) => <PostCard data={post.node as MarkdownRemark} key={i} />)
                    ) : (
                        <div className="empty">게시글이 존재하지 않습니다.</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Posts;

export const query = graphql`
    fragment PostsInfo on MarkdownRemarkConnection {
        edges {
            node {
                excerpt(format: PLAIN, truncate: true, pruneLength: 50)
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
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
        categories: group(field: frontmatter___category) {
            fieldValue
        }
    }
`;
