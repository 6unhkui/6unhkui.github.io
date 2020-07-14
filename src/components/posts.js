import React, {useState, useEffect} from 'react';
import { kebabCase } from 'lodash';
import { Link } from "gatsby"

const Posts = (props) => {
  const showCount = 12;
  const [postsToShow, setPostsToShow] = useState(showCount);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  
  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
  }, []);

  function _infiniteScroll()  {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight === scrollHeight) {
      setPostsToShow(postsToShow + showCount);
    }
  } 

  const changeCategory = e => setSelectedCategory(e.target.dataset.category.toUpperCase());

  return (
  <section className="posts">
    <div className="container">
      {props.sectionTitle && <h1 className="section-title">{props.sectionTitle}</h1>}

      {props.categories && 
        <>
        <div className="switcher-wrap">
          <div className={'switcher-option ' + (selectedCategory === 'ALL' && 'selected')} 
               data-category="ALL"
               onClick={changeCategory}>ALL</div>
            {props.categories.map((v, i) => 
              (<div key={i} 
                className={'switcher-option ' + (selectedCategory === `${v.fieldValue.toUpperCase()}` ? 'selected' : '')} 
                data-category={v.fieldValue}
                onClick={changeCategory}>{v.fieldValue}</div>))}
          </div>

          <div className="select-wrap">
            <select name="category" onChange={(e) => {setSelectedCategory(e.target.value)}}>
              <option value="ALL" selected>ALL</option>
              {props.categories.map((v, i) => 
                (<option value={v.fieldValue} key={i}>{v.fieldValue}</option>))}
            </select>
          </div>
        </>
      }

      {/** Post List Area */}   
      {props.posts.length > 0 ?
        <>
          {props.posts.filter((s) => {
            // 선택된 카테고리가 ALL일 경우, 모든 포스트를 보여주고
            // ALL이 아닐 경우, 선택한 카테고리와 카테고리가 일치하는 포스트만 필터링
            if(selectedCategory.toUpperCase() === 'ALL') return s;
            else return s.node.frontmatter.category.toUpperCase() === selectedCategory.toUpperCase()})
          .slice(0, postsToShow).map((post, i) => {
            const {title, category, tags, featuredImage} = post.node.frontmatter;

            return (
              <article key={i}>
                <div className="post-info">
                  <Link to={post.node.fields.slug}>
                    <span className="category">{category.toUpperCase()}</span>
                    <h1 className="title">
                      {title}
                    </h1>
       
                    <p className="summary" dangerouslySetInnerHTML={{__html: post.node.excerpt,}}/> 
      
                    <div className="tags-wrap">
                      {tags.map((tag, i) => (
                        <span className='tag' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{'# ' + tag}</Link></span>
                      ))}
                    </div> 
                  </Link>
                </div>
              </article>
          )})
          }
        </>
      : 
      <div className="empty">게시글이 존재하지 않습니다.</div>
    }
    </div>
  </section>
  );
};

export default Posts;