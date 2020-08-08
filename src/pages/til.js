import React from 'react';
import Layout from "../components/layout"
import Posts from "../components/posts";
import SEO from "../components/seo"

const ProjectPage = ({data, location}) => {
  console.log(data)
  return (
      <Layout location={location}>
        <SEO title="Today I Learned"/>
        <section className="posts-wrap">
          <div className="posts container">
            <Posts view="list" posts={data.allMarkdownRemark.edges}/>
          </div>
        </section>
      </Layout>
  )
}

export default ProjectPage;

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {fields: {slug: {regex: "/til/"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD")
          title
          tags
        }
      }
    }
  }
}`