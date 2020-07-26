import React, {useState, useEffect} from 'react';
import { kebabCase } from 'lodash';
import { Link } from "gatsby"
import Thumbnail from "../../static/images/gradation-bg.png";

const showCount = 6;
const Posts = ({posts, view = "card"}) => {
  const [postsToShow, setPostsToShow] = useState(showCount);
  
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

  return (
    <>
      {/** Post List Area */}   
      {posts.length > 0 ?
        <>
          {posts.slice(0, postsToShow).map((post, i) => {
            const {title, date, category, tags, featuredImage} = post.node.frontmatter;
            return (
              <article key={i} className={view}>
                <Link to={post.node.fields.slug}>
                  <img src={featuredImage ? featuredImage.childImageSharp.resize.src : Thumbnail} />

                  <div className="post-info">
                    <p className="date">{date}</p>
                    <span className="category">{category}</span>
                    <h1 className="title">
                      {title}
                    </h1>
       
                    <p className="summary" dangerouslySetInnerHTML={{__html: post.node.excerpt,}}/> 


                    <div className="tags-wrap">
                      {tags.map((tag, i) => (
                        <span className='tag' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{'# ' + tag}</Link></span>
                      ))}
                    </div> 
                    </div>
                </Link>
              </article>
          )})
          }
        </>
      : 
      <div className="empty">게시글이 존재하지 않습니다.</div>
    }
  </>
  );
};

export default Posts;