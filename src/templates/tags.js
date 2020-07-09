// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from "../components/posts";
import PageTitle from "../components/pageTitle";

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  // const { edges, totalCount } = data.allMarkdownRemark;
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? '' : 's'
  // } tagged with "${tag}"`; 

  return (
    <Layout location={location}>
      <div className="tags-page-wrap">
        <PageTitle title={tag} emoji="#️" subtxt={[`${data.allMarkdownRemark.totalCount} posts`]}/>
        {/* <div className="all-tags"><Link to="/tags">{'All tags >'}</Link></div> */}
        <Post posts={data.allMarkdownRemark.edges}/>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
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
          }
        }
      }
    }
  }
`