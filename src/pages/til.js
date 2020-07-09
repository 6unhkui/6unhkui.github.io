import React from 'react';
import Layout from "../components/layout"
import Post from "../components/posts";
import PageTitle from "../components/pageTitle";

const TilPage = ({data, location}) => {
    return (
        <Layout location={location}>
            {/* <PageTitle title="Today I Learned" emoji="📚"/> */}

            <Post posts={data.allMarkdownRemark.edges}/>
        </Layout>
    )
}

export default TilPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Til" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
}`