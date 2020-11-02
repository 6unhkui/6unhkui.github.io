import React from 'react';
import Thumbnail from "../../../static/images/gradation-bg.png";
import { Link } from "gatsby"
import { kebabCase } from 'lodash';
import { Edge } from "../../interfaces/PostList"


interface Props {
    data : Edge
}

const PostSingle: React.FC<Props> = ({data}) => {
    const {
        frontmatter : {title, date, category, tags, featuredImage},
        fields : {slug},
        excerpt
    } = data.node;

    return (
        <article className='card'>
        <Link to={slug}>
          <img src={featuredImage ? featuredImage.childImageSharp.resize.src : Thumbnail} />

          <div className="post-info">
            <p className="date">{date}</p>
            <span className="category">{category}</span>
            <h1 className="title">
              {title}
            </h1>

            <p className="summary" dangerouslySetInnerHTML={{__html: excerpt,}}/> 

            <div className="tags-wrap">
              {tags?.map((tag, i) => (
                <span className='tag' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></span>
              ))}
            </div> 
            </div>
        </Link>
      </article>
    )
}

export default PostSingle;