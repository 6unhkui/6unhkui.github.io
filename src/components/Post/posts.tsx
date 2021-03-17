import React, { useEffect, useState, useCallback } from "react";
import Switcher from "../Filter/switcher";
import Search from "../Filter/search";
import { Query } from "../../interfaces/PostList";
import PostSingle from "./postSingle";
import InfinitiScroll from "../../utils/infiniteScroll";

interface Props {
    data: Query;
}
enum Category {
    All = "ALL"
}

const SHOW_COUNT = 6;

const Posts: React.FC<Props> = ({ data }) => {
    const {
        allMarkdownRemark: { edges: allPosts, categories }
    } = data;
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
        const _infiniteScroll = InfinitiScroll.bind(null, () => setPostsToShow(state => state + SHOW_COUNT));

        document.addEventListener("scroll", _infiniteScroll, false);
        return () => {
            document.removeEventListener("scroll", _infiniteScroll, false);
        };
    }, []);

    function filterPosts() {
        return allPosts
            .filter(post => {
                const {
                    node: {
                        frontmatter: { category }
                    }
                } = post;
                // 선택된 카테고리가 ALL 이거나, 선택된 카테고리와 리스트의 카테고리가 일치할 경우 true
                return (
                    selectedCategory.toUpperCase() === Category.All || category.toUpperCase() === selectedCategory.toUpperCase()
                );
            })
            .filter(post => {
                const {
                    node: {
                        frontmatter: { title, tags }
                    }
                } = post;
                // 검색어가 없거나, 제목 혹은 태그가 일치할 경우 true
                return (
                    searchValue.length === 0 ||
                    title.toUpperCase().includes(searchValue.toUpperCase()) ||
                    tags.some(tag => tag.toUpperCase().includes(searchValue.toUpperCase()))
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
                        <Switcher items={categoryItems} selectedItem={selectedCategory} onChange={onChangeCategory} />
                        <Search onChange={onChangeSearchInput} value={searchValue} />
                    </div>
                )}

                <div
                    style={{
                        margin: 0
                    }}
                >
                    {posts.length > 0 ? (
                        posts.slice(0, postsToShow).map((post, i) => <PostSingle data={post} key={i} />)
                    ) : (
                        <div className="empty">게시글이 존재하지 않습니다.</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Posts;
