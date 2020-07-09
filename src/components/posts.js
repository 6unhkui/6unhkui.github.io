import React, {useState, useEffect} from 'react';
import { kebabCase } from 'lodash';
import { Link } from "gatsby"
import Image from "gatsby-image";

const Posts = (props) => {
  const showCount = 10;
  const [postsToShow, setPostsToShow] = useState(showCount);

  return (
  <section className="posts">
    <div className="container">
      {props.category && <h1 className="posts-category">{props.category}</h1>}

      {props.posts.length > 0 ?
        <div>
          {props.posts.slice(0, postsToShow).map((post, i) => {
          const {title, category, tags, featuredImage} = post.node.frontmatter;

          return (
           <article key={i}>
            <Link to={post.node.fields.slug}>
            {category && <span className="category">{category.toUpperCase()}</span>}

            <h1 className="title">
              {title}
            </h1>
       
            <p className="summary"
                dangerouslySetInnerHTML={{__html: post.node.excerpt,}}
            /> 
      
            <div className="tags-wrap">
              {tags.map((tag, i) => (
                <span className='tag' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{'# ' + tag}</Link></span>
              ))}
            </div> 
            </Link>
            </article>
          )})}
          {
          postsToShow < props.posts.length && 
          <div className="load-more">
            <button onClick={() => {
            setPostsToShow(
              postsToShow + showCount
            )
            }}>Load More</button>
         </div>
        }
        </div>
      : 
      <div className="empty">게시글이 존재하지 않습니다.</div>
    }
    </div>
  </section>
  );
};

export default Posts;