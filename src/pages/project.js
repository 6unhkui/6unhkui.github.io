import React, {useState} from 'react';
import Layout from "../components/layout"
import Posts from "../components/posts";
import SEO from "../components/seo"
import Switcher from "../components/switcher";

const ProjectPage = ({data, location}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const changeCategory = value => {
    setSelectedCategory(value);
  };
  
  const post = data.allMarkdownRemark.edges;

  return (
      <Layout location={location}>
        <SEO title="Project"/>

        <section className="posts">
          <div className="container">
            {post.length > 0 && 
              <>
                <Switcher items={data.allMarkdownRemark.categories} selectedItem={selectedCategory} changeItem={changeCategory} />
              </>
            }
            
            <Posts posts={post.filter((s) => {
                // 선택된 카테고리가 ALL일 경우, 모든 포스트를 보여주고
                // ALL이 아닐 경우, 선택한 카테고리와 카테고리가 일치하는 포스트만 필터링
                if(selectedCategory.toUpperCase() === 'ALL') return s;
                else return s.node.frontmatter.category.toUpperCase() === selectedCategory.toUpperCase()})
            }/>
          </div>
        </section>
      </Layout>
  )
}

export default ProjectPage;

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: { frontmatter: { menu: { eq: "PROJECT"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
}`