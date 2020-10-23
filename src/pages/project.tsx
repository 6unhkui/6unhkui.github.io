import React from 'react';
import Index from "../components/Layout"
import SEO from "../components/seo"
import PostDetail from "../components/Post/postDetail"
import { Query } from "../interfaces/PostList"
import { graphql } from "gatsby"

interface Props {
  data : Query;
  location: Location;
}
const ProjectPage: React.FC<Props> = ({data, location}) => {
  return (
      <Index location={location}>
        <SEO title="Project"/>
        <PostDetail data={data}/>
      </Index>
  )
}

export default ProjectPage;


export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/^\/project\//"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
