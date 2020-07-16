import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import Typed from 'react-typed';

const IndexPage = ({data, location}) => {
  console.log(process.env.GATSBY_DISQUS_NAME)

  return (
    <Layout location={location}>
      <SEO title="Home"/>
      <section className="page-title-wrap">
          <div className='container'>
          <h1 className="page-title">
            <span role="img" className="emoji">👋</span>
            <Typed strings={['Hello!']}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay={2000}
                    showCursor
                    loop
                />
          </h1>
          <div className="sub-txt">
            <p>웹 개발자 심인경입니다. <br/>
               Gatsby.js를 사용하여 만들었습니다. 😊</p>
          </div> 
        </div>
      </section>

      <section className="posts index">
        <div className="container">
          <h1 className="section-title">✏️ Recent Posts</h1>
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
