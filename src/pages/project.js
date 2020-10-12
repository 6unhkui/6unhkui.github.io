import React from 'react';
import Index from "../components/Layout"
import SEO from "../components/seo"
import PostDetail from "../components/Post/postDetail"

const ProjectPage = ({data, location}) => {
  return (
      <Index location={location}>
        <SEO title="Project"/>
        <PostDetail data={data}/>
      </Index>
  )
}

export default ProjectPage;


export const pageQuery = graphql`
query($path: String! = "/project/") {
    allMarkdownRemark(filter: {fields: {slug: {regex: $path}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
}`;
