import React from 'react';
import Index from "../components/Layout"
import SEO from "../components/seo"
import PostDetail from '../components/Post/postDetail';
import { Query } from "../models/ListQuery"
import { graphql } from "gatsby"


interface Props {
  data : Query;
  location: Location;
}
const ComputerSciencePage: React.FC<Props> = ({data, location}) => {
  return (
      <Index location={location}>
        <SEO title="Computer Science"/>
        <PostDetail data={data}/>
      </Index>
  )
}

export default ComputerSciencePage;

export const pageQuery = graphql`
query($path: String! = "/cs/") {
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