import React from 'react';
import Layout from "../components/layout"
import Posts from "../components/posts";
import PageTitle from "../components/pageTitle";

const DevPage = ({data, location}) => {
    return (
        <Layout location={location}>
            {/* <PageTitle title="Dev" emoji="💻"/> */}
            <Posts posts={data.allMarkdownRemark.edges}/>
        </Layout>
    )
}

export default DevPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Dev" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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