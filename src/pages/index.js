import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/posts";
import PageTitle from "../components/pageTitle";

const IndexPage = ({data, location}) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Home" />

      <PageTitle title="Hello" emoji="👋"/>

      <div className="about-wrap">
        <p>개발 공부를 하면서 배운 내용을 기록하는 블로그입니다.</p>
        <p>Gatsby.js를 사용하여 만들었습니다. 😊</p>
      </div>


      <div className="recent-posts-wrap">
        ㅡ
        <h1>Recent Posts</h1>
        <Post posts={posts}/>
        {/* {posts.map((post, i) => (
          <Post node={post.node} key={i}/>
        ))} */}

      </div>
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
