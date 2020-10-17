import React from 'react';
import Index from "../components/Layout"
import SEO from "../components/seo"
import PostDetail from '../components/Post/postDetail';
import { graphql } from "gatsby"
import { Query } from "../models/ListQuery"

interface Props {
  data : Query;
  location: Location;
}
const ProgrammingPage: React.FC<Props> = ({data, location}) => {
  return (
      <Index location={location}>
        <SEO title="Programming"/>
        <PostDetail data={data}/>
      </Index>
  )
}

export default ProgrammingPage;

export const pageQuery = graphql`
query($path: String! = "/programming/") {
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