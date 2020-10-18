import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/Layout';
import Post from "../components/Post/posts";
import SEO from "../components/seo"
import PageTitle from "../components/Layout/pageTitle";
import { Edge } from "../interfaces/PostList"

interface Props {
  pageContext : {
    tag : string
  },
  data : {
    allMarkdownRemark : {
      totalCount : number,
      edges : Edge[],
    }
  },
  location : Location
}

const Tags: React.FC<Props> = ({ pageContext, data, location }) => {
  const { tag } = pageContext;

  return (
    <Index location={location}>
      <SEO title={tag}/>
      <div className="tags-page-wrap">
        <PageTitle title={tag}
                   subTxt={[`${data.allMarkdownRemark.totalCount} 
                   post${(data.allMarkdownRemark.totalCount === 1 ? '' : 's')}`]}/>
        
        <section className="posts-wrap">
          <div className="container">
            <Post posts={data.allMarkdownRemark.edges}/>
          </div>
        </section>
      </div>
    </Index>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
    }
  }
`