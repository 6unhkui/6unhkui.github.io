import React from 'react';
import { kebabCase } from 'lodash';
import { Link } from "gatsby"

const Posts = (props) => (
  <section className="posts">
    <div className="container">
    {props.posts.length > 0 ?
      props.posts.map((post, i) => {
        const {title, category, tags} = post.node.frontmatter;

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
          )
        }) 
      : 
      <div className="empty">게시글이 존재하지 않습니다.</div>
    }
    </div>
  </section>
);

export default Posts;