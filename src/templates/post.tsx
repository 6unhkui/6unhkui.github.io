// markdown-template.js
import React from "react"
import { kebabCase } from 'lodash';
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Index from "../components/Layout"
import TableOfContents from "../components/Post/tableOfContents";
import PostComment from "../components/Post/postComment";
import { PageContext } from "../interfaces/PageContext"
import { Query } from "../interfaces/PostDetail"

interface Props {
  data : Query,
  pageContext : PageContext,
  location : Location
}

const PostTemplate: React.FC<Props> = ({ data, pageContext, location }) => {
  const { previous, next } = pageContext;
  const {
    site : {siteMetadata : { author }},
    markdownRemark: {
      excerpt,
      html,
      tableOfContents,
      frontmatter : {category, title, date, tags, featuredImage}
    }
  } = data;

  const image = featuredImage ? featuredImage.childImageSharp.original : undefined;

  return (
    <Index location={location}>
        <SEO
          title={title}
          description={excerpt}
          image = {image}
          article={true}
        />
       
        <section className="post-view">
            <div className="featured-image" style={{backgroundImage : image ? `url(${image.src})` : ''}}>
              <div className="post-info-wrap">
                <div className="post-info container">
                  {category && <span className="category">{category}</span>}
                  {title && <h1 className="title">{title}</h1>}
                  <span className="meta-data">by <span className="writer">{author}</span>{' ∙ ' + date}</span>
                  <div className="tags-wrap">
                  {tags.map((tag, i) => (
                    <span className='tag' key={i}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </span>
                  ))}
                  </div> 
                </div>
              </div>
            </div>

          <div className="container">
          <TableOfContents items={tableOfContents}/>

          <article>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />

          <hr className="end-line"/>

          <div className="navigation-wrap">
            {previous && (
              <div className="navigation previous">
                <p>Previous</p>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </div> )}

            {next && (
              <div className="navigation next">
                <p>Next</p>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </div>)}
          </div>

          <PostComment repo="6unhkui/6unhkui.github.io" />
          </article>

        </div>
      </section>
    </Index>
  )
}

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, yyyy")
        category
        tags
        featuredImage {
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      } 
    }
  }
`