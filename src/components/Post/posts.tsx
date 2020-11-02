import React, {useEffect, useState, useCallback} from 'react';
import Switcher from "../Filter/switcher";
import Search from "../Filter/search"
import { Query } from "../../interfaces/PostList"
import PostSingle from './postSingle';

interface Props {
  data : Query
}

const showCount = 6;

const Posts : React.FC<Props> = ({data}) => {
  const {allMarkdownRemark : {edges, categories}} = data;
  const [posts, setPosts] = useState(edges);
  const [postsToShow, setPostsToShow] = useState(showCount);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categoryItems = useState(() => {
    const arr = categories.slice();
    arr.unshift({fieldValue : 'ALL'});
    return arr;
  })[0];

  useEffect(() => {
    setPosts(edges.filter(post => {
      const {node : {frontmatter : {category}}} = post;
      // 선택된 카테고리가 ALL 이거나, 선택된 카테고리와 리스트의 카테고리가 일치할 경우 true
      return selectedCategory.toUpperCase() === 'ALL' || category.toUpperCase() === selectedCategory.toUpperCase()
    }).filter(post => {
      const {node : {frontmatter : {title, tags}}} = post;
      // 검색어가 없거나, 제목 혹은 태그가 일치할 경우 true
      return searchValue.trim().length === 0 ||
             title.toUpperCase().includes(searchValue.trim().toUpperCase()) || 
             tags.find(a => a.toUpperCase().includes(searchValue.trim().toUpperCase()));
    }))
  }, [searchValue, selectedCategory])

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return window.removeEventListener('scroll', _infiniteScroll);
  }, []);

  function _infiniteScroll()  {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight > scrollHeight - 300) {
      setPostsToShow(postsToShow + showCount);
    }
  }

  const changeCategory = useCallback(value => {
    setSelectedCategory(value);
    setSearchValue('');
  }, []);

  return ( 
        <section className="posts-wrap">
          <div className="posts container">
            {edges.length > 0 &&
              <div className='filter-wrap' style={{marginBottom : '1.8rem'}}>
                <Switcher items={categoryItems}
                          selectedItem={selectedCategory}
                          onChange={changeCategory}/>
                <Search onChange={setSearchValue} value={searchValue}/>
              </div>
            }

            {posts.length > 0 ? 
              posts.slice(0, postsToShow).map(post => <PostSingle data={post}/>)
              : <div className="empty">게시글이 존재하지 않습니다.</div>
            }
          </div>
        </section>
  )
}

export default Posts;
