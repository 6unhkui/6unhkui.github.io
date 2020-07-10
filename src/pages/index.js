import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"
import PageTitle from "../components/pageTitle"
import Typed from 'react-typed';

const IndexPage = ({data, location}) => {
  return (
    <Layout location={location}>
      <section className="page-title-wrap">
          <div className='container'>
          <h1 className="page-title">
            <span role="img" className="emoji">👋</span>
            <Typed strings={['Hello']}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay={2000}
                    showCursor
                    loop
                />
          </h1>
          <div className="sub-txt">
            <p>개발 공부를 하면서 배운 내용을 기록하는 블로그입니다.<br/>
               Gatsby.js를 사용하여 만들었습니다. 😊</p>
          </div> 
        </div>
      </section>
      <Posts posts={data.allMarkdownRemark.edges} sectionTitle="Recent Posts"/>
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
          }
        }
      }
    }
}`

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             category
//             tags
//             featuredImage {
//               childImageSharp {
//                 sizes(maxWidth: 630) {
//                   base64
//                   src
//                   srcSet
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }`
