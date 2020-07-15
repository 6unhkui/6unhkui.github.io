import React from 'react';
import Layout from "../components/layout"
import Post from "../components/posts";
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle";

const ProjectPage = ({data, location}) => {
    return (
        <Layout location={location}>
            <SEO title="Project"/>

            <section className="posts">
              <div className="container">
                <Post posts={data.allMarkdownRemark.edges}/>
              </div>
            </section>
        </Layout>
    )
}

export default ProjectPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "PROJECT" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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