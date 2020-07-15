// markdown-template.js
import React, {useState} from "react"
import { kebabCase } from 'lodash';
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TableOfContents from "../components/tableOfContents";

export default function PostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const { author} = data.site.siteMetadata;
  const {menu, category, title, date, tags, featuredImage} = post.frontmatter;

  const image = featuredImage ? featuredImage.childImageSharp.fluid : null;

  return (
    <Layout location={location} menu={menu}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          image = {image}
        />
        {/* <TableOfContents items={post.tableOfContents}/> */}
        <section className="post-view">
            <div className="featured-image" style={{backgroundImage : image ? `url(${image.originalImg})` : ''}}>
              <div className="post-info-wrap">
                <div className="post-info container">
                  <span className="category">{category}</span>
                  <h1 className="title">{title}</h1>
                  <span className="date">{'by ' + author + ' ∙ ' + date}</span>
                  <div className="tags-wrap">
                  {tags.map((tag, i) => (
                <span className='tag' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{'# ' + tag}</Link></span>
              ))}
            </div> 
                </div>
              </div>
            </div>
          <div className="container">
            
          <article>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr/>
          </article>

          <div className="navigation-wrap">
            <div className="navigation previous">
              <p>Previous</p>
              {previous ? (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              ) :  <span>첫번째 글입니다.</span>}
            </div>

            <div className="navigation next">
              <p>Next</p>
              {next ? (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            ) : <span>마지막 글입니다.</span>}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        menu
        title
        date(formatString: "MMMM DD, yyyy")
        category
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1024) {
              originalImg
              base64
              src
              srcSet
              presentationHeight
              presentationWidth
            }
          }
        }
      } 
    }
  }
`