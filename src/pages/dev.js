import React from 'react';
import Layout from "../components/layout"
import Posts from "../components/posts";
import PageTitle from "../components/pageTitle";

const DevPage = ({data, location}) => {
  const {categories, tags} = data.allMarkdownRemark;

  return (
      <Layout location={location}>
          {/* <PageTitle title="Dev" emoji="💻"/> */}
          {/* <section className="posts">
          <div className="container">
            <div><p>CATEGORIES</p>{categories.map(c => (<button>{c.fieldValue}</button>))}</div>
            <div><p>Tags</p>{tags.map(c => (<button>{c.fieldValue}</button>))}</div>
          </div>
          </section> */}
          <Posts posts={data.allMarkdownRemark.edges} categories={categories}/>
      </Layout>
  )
}

export default DevPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "DEV" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
                resize(fit: COVER, height: 300, cropFocus: CENTER, width: 450) {
                  src
                  height
                  width
                }
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
      categories : group(field: frontmatter___category) {
        fieldValue
      }
      tags : group(field: frontmatter___tags) {
        fieldValue
      }
    }
}`