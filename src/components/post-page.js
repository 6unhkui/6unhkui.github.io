import React, {useState} from 'react';
import Posts from "./posts";
import Switcher from "./switcher";
import Search from "./search";

export default function PostPage({data}) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');
  const changeCategory = value => {
    setSelectedCategory(value);
    setSearchValue('');
  };

  const post = data.allMarkdownRemark.edges; 

  return ( 
        <section className="posts-wrap">
          {post.length > 0 && 
            <>
              <Switcher items={data.allMarkdownRemark.categories} selectedItem={selectedCategory} changeItem={changeCategory} />
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </>
          }
          <div className="posts container">
            <Posts posts={post.filter((s) => {
                // 선택된 카테고리가 ALL일 경우, 모든 포스트를 보여주고
                // ALL이 아닐 경우, 선택한 카테고리와 카테고리가 일치하는 포스트만 필터링
                if(selectedCategory.toUpperCase() === 'ALL') return s;
                else return s.node.frontmatter.category.toUpperCase() === selectedCategory.toUpperCase()})
              .filter((s) => {
                // 검색어가 없을 경우, 모든 포스트를 보여주고
                // 검색어가 있을 경우, 제목과 태그에 일치하는 포스트만 필터링
                if(searchValue.trim().length === 0) return s;
                else {
                  if(s.node.frontmatter.title.toUpperCase().indexOf(searchValue.trim().toUpperCase()) !== -1) return s;
                  else if(s.node.frontmatter.tags.findIndex(a => a.toUpperCase().indexOf(searchValue.trim().toUpperCase()) !== -1) !== -1) return s;
                  return null;
                }})
            }/>
          </div>
        </section>
  )
}
