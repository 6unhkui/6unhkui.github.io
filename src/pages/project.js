import React from 'react';
import Layout from "../components/layout"
import Post from "../components/posts";
import PageTitle from "../components/pageTitle";

const ProjectPage = ({data, location}) => {
    return (
        <Layout location={location}>
            <PageTitle title="Project" emoji="🏢"/>
            
            <Post posts={data.allMarkdownRemark.edges}/>
        </Layout>
    )
}

export default ProjectPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Project" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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