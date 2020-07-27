import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPage from '../components/post-page';

const EtcPage = ({data, location}) => {
  return (
      <Layout location={location}>
        <SEO title="ComputerScience"/>
        <PostPage data={data}/>
      </Layout>
  )
}

export default EtcPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "etc"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
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