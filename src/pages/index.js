import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"
import PageTitle from "../components/pageTitle"

const IndexPage = ({data, location}) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <PageTitle title="Hello" emoji="👋" 
                 subtxt={['개발 공부를 하면서 배운 내용을 기록하는 블로그입니다.','Gatsby.js를 사용하여 만들었습니다. 😊']}/>
      <Posts posts={posts}/>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            tags
          }
        }
      }
    }
  }`
