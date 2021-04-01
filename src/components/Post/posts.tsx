import React, { useEffect, useState, useCallback } from "react";
import Tab from "components/Filter/Tab";
import Search from "components/Filter/Search";
import PostCard from "./PostCard";
import infinitiScroll from "utils/infiniteScroll";
import { MarkdownRemark, PostsInfoFragment } from "graphql-types";
import { graphql } from "gatsby";

const SHOW_COUNT = 6;

enum Category {
    All = "ALL"
}

interface PostsProps {
    data: PostsInfoFragment;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
    const { edges: allPosts, categories } = data;
    const [posts, setPosts] = useState(allPosts);
    const [postsToShow, setPostsToShow] = useState(SHOW_COUNT);
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(Category.All);
    const categoryItems = useState(() => [{ fieldValue: Category.All }, ...categories])[0];

    useEffect(() => {
        setPostsToShow(SHOW_COUNT);
        setPosts(filterPosts);
    }, [searchValue, selectedCategory]);

    useEffect(() => {
        const _infiniteScroll = infinitiScroll.bind(null, () => setPostsToShow(state => state + SHOW_COUNT));

        document.addEventListener("scroll", _infiniteScroll, false);
        return () => {
            document.removeEventListener("scroll", _infiniteScroll, false);
        };
    }, []);

    function filterPosts() {
        return allPosts
            .filter(post => {
                const category = post.node.frontmatter?.category || "";

                // 선택된 카테고리가 ALL 이거나, 선택된 카테고리와 리스트의 카테고리가 일치할 경우 true
                return (
                    selectedCategory.toUpperCase() === Category.All || category.toUpperCase() === selectedCategory.toUpperCase()
                );
            })
            .filter(post => {
                const title = post.node.frontmatter?.title || "";
                const tags = post.node.frontmatter?.tags || [];

                // 검색어가 없거나, 제목 혹은 태그가 일치할 경우 true
                return (
                    searchValue.length === 0 ||
                    title.toUpperCase().includes(searchValue.toUpperCase()) ||
                    tags.some(tag => tag?.toUpperCase().includes(searchValue.toUpperCase()))
                );
            });
    }

    const onChangeCategory = useCallback(value => {
        setSelectedCategory(value.trim());
        setSearchValue("");
    }, []);

    const onChangeSearchInput = useCallback(value => {
        setSearchValue(value.trim());
    }, []);

    return (
        <section className="posts-wrap">
            <div className="posts container">
                {allPosts.length > 0 && (
                    <div className="filter-wrap">
                        <Tab items={categoryItems} selectedItem={selectedCategory} onChange={onChangeCategory} />
                        <Search onChange={onChangeSearchInput} value={searchValue} />
                    </div>
                )}

                <div style={{ margin: 0 }}>
                    {posts.length > 0 ? (
                        posts.slice(0, postsToShow).map((post, i) => <PostCard data={post.node as MarkdownRemark} key={i} />)
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
