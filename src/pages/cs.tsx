import React from 'react';
import Index from "../components/Layout"
import SEO from "../components/seo"
import Posts from '../components/Post/posts';
import { Query } from "../interfaces/PostList"
import { graphql } from "gatsby"


interface Props {
  data : Query;
  location: Location;
}
const ComputerSciencePage: React.FC<Props> = ({data, location}) => {
  console.log(data)
  return (
      <Index location={location}>
        <SEO title="Computer Science"/>
        <Posts data={data}/>
      </Index>
  )
}

export default ComputerSciencePage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/^\/cs\//"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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