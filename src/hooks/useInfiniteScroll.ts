import { PostsInfoFragment } from "graphql-types";
import { useCallback, useEffect, useState } from "react";
import infinitiScroll from "utils/infiniteScroll";

export enum Category {
    All = "ALL"
}

type items = Pick<PostsInfoFragment, "edges">["edges"];

interface IUseInfiniteScroll {
    limit?: number;
    items: items;
    initCategories?: string[];
}

export const useInfiniteScroll = ({ limit = 6, items, initCategories = [] }: IUseInfiniteScroll) => {
    const [count, setCount] = useState<number>(limit);
    const [data, setData] = useState<items>(items);
    const [keyword, setKeyword] = useState<string>("");

    const categoryItems = [Category.All, ...initCategories];
    const [selectedCategory, setSelectedCategory] = useState<string>(categoryItems[0]);

    const _infiniteScroll = infinitiScroll.bind(null, () => setCount(state => state + limit));

    useEffect(() => {
        setCount(limit);
        setData(filterPosts);
    }, [keyword, selectedCategory]);

    useEffect(() => {
        document.addEventListener("scroll", _infiniteScroll);
        return () => {
            document.removeEventListener("scroll", _infiniteScroll);
        };
    }, []);

    function filterPosts() {
        return items
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
                    keyword.length === 0 ||
                    title.toUpperCase().includes(keyword.toUpperCase()) ||
                    tags.some(tag => tag?.toUpperCase().includes(keyword.toUpperCase()))
                );
            });
    }

    const onChangeSelectedCategory = useCallback(category => {
        setSelectedCategory(category);
        setKeyword("");
    }, []);

    const onChangeKeyword = useCallback(keyword => {
        setKeyword(keyword);
    }, []);

    return {
        data,
        count,
        categoryItems,
        keyword,
        selectedCategory,
        onChangeKeyword,
        onChangeSelectedCategory
    };
};
