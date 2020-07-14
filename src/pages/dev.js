import React from 'react';
import Layout from "../components/layout"
import Posts from "../components/posts";
import SEO from "../components/seo"

const DevPage = ({data, location}) => {
  const {categories} = data.allMarkdownRemark;

  return (
      <Layout location={location}>
        <SEO title="Development"/>
        <Posts posts={data.allMarkdownRemark.edges} categories={categories}/>
      </Layout>
  )
}

export default DevPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "DEV"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
                fluid(cropFocus: CENTER, fit: COVER, maxWidth: 450) {
                  base64
                  originalImg
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