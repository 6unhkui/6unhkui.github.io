import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPage from '../components/post-page';

const ProgrammingPage = ({data, location}) => {
  return (
      <Layout location={location}>
        <SEO title="Programming"/>
        <PostPage data={data}/>
      </Layout>
  )
}

export default ProgrammingPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "programming"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
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