import React from 'react';
import Index from "../components/Layout"
import SEO from "../components/seo"
import PostDetail from '../components/Post/postDetail';
import { Query } from "../interfaces/PostList"
import { graphql } from "gatsby"


interface Props {
  data : Query;
  location: Location;
}
const DevOpsPage: React.FC<Props> = ({data, location}) => {
  return (
      <Index location={location}>
        <SEO title="DevOps"/>
        <PostDetail data={data}/>
      </Index>
  )
}

export default DevOpsPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/^\/devops\//"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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