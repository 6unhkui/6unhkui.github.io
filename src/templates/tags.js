import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from "../components/posts";
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle";

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;

  return (
    <Layout location={location}>
      <SEO title={tag}/>
      <div className="tags-page-wrap">
        <PageTitle title={tag} emoji="#️" subtxt={[`${data.allMarkdownRemark.totalCount} post${(data.allMarkdownRemark.totalCount === 1 ? '' : 's')}`]}/>
        
        <section className="posts">
          <div className="container">
            <Post posts={data.allMarkdownRemark.edges}/>
          </div>
        </section>
      </div>
    </Layout>
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
                fluid(cropFocus: CENTER, fit: COVER, maxWidth: 450) {
                  base64
                  originalImg
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