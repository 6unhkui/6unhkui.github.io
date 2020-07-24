import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPage from '../components/postPage';

const ComputerSciencePage = ({data, location}) => {
  return (
      <Layout location={location}>
        <SEO title="ComputerScience"/>
        <PostPage data={data}/>
      </Layout>
  )
}

export default ComputerSciencePage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "cs"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
      categories : group(field: frontmatter___category) {
        fieldValue
      }
    }
}`