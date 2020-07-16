// markdown-template.js
import React from "react"
import { kebabCase } from 'lodash';
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TableOfContents from "../components/tableOfContents";
import { DiscussionEmbed } from "disqus-react"

export default function PostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const { author} = data.site.siteMetadata;
  const {menu, category, title, date, tags, featuredImage} = post.frontmatter;

  const image = featuredImage ? featuredImage.childImageSharp.original : null;

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.fields.slug, title },
  }

  return (
    <Layout location={location} menu={menu}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          image = {image}
        />
       
        <section className="post-view">
            <div className="featured-image" style={{backgroundImage : image ? `url(${image.src})` : ''}}>
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
          <TableOfContents items={post.tableOfContents}/>
          <article>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* <hr/> */}
          </article>
          
          <hr/>
          <div className="navigation-wrap">
            {previous && (
              <div className="navigation previous">
                <p>Previous</p>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </div> )
            }

            {next &&
              <div className="navigation next">
                <p>Next</p>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </div>
            }
          </div>
          
          <DiscussionEmbed {...disqusConfig} style={{marginTop : '4rem'}} />
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
      fields {
        slug
      }
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