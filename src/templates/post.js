// markdown-template.js
import React, {useState} from "react"
import { kebabCase } from 'lodash';
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TableOfContents from "../components/tableOfContents";
import Image from "gatsby-image";

export default function PostTemplate({ data, pageContext, location }) {
  
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const { author, social, description } = data.site.siteMetadata;

  const {menu, category, title, date, tags, featuredImage} = post.frontmatter;

  // console.log(post.tableOfContents)
  const avatar = data.avatar.childImageSharp.fixed;

  return (
    <Layout location={location} menu={menu}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
        />
        
        <section className="post-view">
          <div className="container">
          <article>
            {featuredImage && <Image fluid={featuredImage.childImageSharp.fluid} />} 

            <div className="post-info-wrap">
              <span className="category">{category.toUpperCase()}</span>
              <h1 className="title">{title}</h1>
              <p className="date">{date}</p>
            </div>

            <hr/>
            {/* <TableOfContents items={post.tableOfContents}/>  */}
          
          <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="tags-wrap">
              {tags.map((tag, i) => (
                <span className='tag' key={i}><Link to={`/tags/${kebabCase(tag)}/`}>{'# ' + tag}</Link></span>
              ))}
          </div> 

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
      {/* <TableOfContents items={post.tableOfContents}/> */}
      </section>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
          fixed(width: 40, height: 40) {
              base64
              width
              height
              src
              srcSet
          }
      }
    }
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
            fluid(maxWidth: 800) {
              base64
              src
              srcSet
            }
          }
        }
      } 
    }
  }
`