import React from 'react';
import { kebabCase } from 'lodash';
import { Link } from "gatsby"

const Posts = (props) => (
  <>
    {props.posts.length > 0 ?
      props.posts.map((post, i) => {
        const {title, category, tags} = post.node.frontmatter;

        return (
          <article key={i}>

            {category && <span className="category">{category.toUpperCase()}</span>}
      
            <h2 className="title">
              <Link to={post.node.fields.slug}>
                {title}
              </Link> 
            </h2>
       
            <p className="summary"
                dangerouslySetInnerHTML={{__html: post.node.excerpt,}}
            /> 
      
            <div className="skill-wrap">
              {tags.map((tag, i) => (
                <span className='skill' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{'# ' + tag}</Link></span>
              ))}
            </div> 
          </article>
          )
        }) 
      : 
      <article><div className="empty">게시글이 존재하지 않습니다.</div></article>
    }
  </>
);

export default Posts;