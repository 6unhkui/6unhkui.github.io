import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"
import Typed from 'react-typed';

const IndexPage = ({data, location}) => {
  return (
    <Layout location={location}>
      <SEO/>
      <section className="page-title-wrap">
          <div className='container'>
            <div>
          <h1 className="page-title">
            <span style={{display: 'block'}}>Hello!</span>
            <Typed strings={['I\'m Inkyung', 'a Web Developer']}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay={900}
                    showCursor
                    loop
                />
          </h1>
          <div className="sub-txt">
            <p>웹 개발자 심인경입니다. <span role="img" aria-label="emoji">👩‍💻</span></p><br/>
          </div> 
          </div>
        </div>
      </section>
 
      <section className="posts index">
        <div className="container">
          <h1 className="section-title"><span role="img" aria-label="emoji">✏️ </span>Recent Posts</h1>
          <Posts posts={data.allMarkdownRemark.edges}/>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            category
            featuredImage {
              childImageSharp{
                resize(width: 700) {
                  src
                }
              }
            }
          }
        }
      }
    }
}`
