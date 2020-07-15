import React, {useState, useEffect} from 'react';
import Layout from "../components/layout"
import Posts from "../components/posts";
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DevPage = ({data, location}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');

  const {categories} = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.edges;

  const changeCategory = value => {
    setSelectedCategory(value);
    setSearchValue('');
  };

  return (
      <Layout location={location}>
        <SEO title="Development"/>

        <section className="posts">
          <div className="container">
            <div className="switcher-wrap">
              <div className={'switcher-option ' + (selectedCategory === 'ALL' && 'selected')} 
                  data-category="ALL"
                  onClick={(e) => {changeCategory(e.target.dataset.category)}}>ALL</div>
              {categories.map((v, i) => 
                (<div key={i} 
                  className={'switcher-option ' + (selectedCategory.toUpperCase() === `${v.fieldValue.toUpperCase()}` ? 'selected' : '')} 
                  data-category={v.fieldValue}
                  onClick={(e) => {changeCategory(e.target.dataset.category)}}>{v.fieldValue}</div>))}
            </div>

            <div className="select-wrap">
              <select name="category" onChange={(e) => {changeCategory(e.target.value)}}>
                <option value="ALL" selected>ALL</option>
                  {categories.map((v, i) => 
                  (<option value={v.fieldValue} key={i}>{v.fieldValue}</option>))}
              </select>
            </div>

            <div className="search-wrap">
              <span class="ico-search">
                <FontAwesomeIcon icon={"search"} style={{opacity: '.15' , width: '1.5rem', height:'1.5rem'}}/>
              </span>
              <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="검색어를 입력하세요"/>
            </div>

            <Posts posts={posts.filter((s) => {
                // 선택된 카테고리가 ALL일 경우, 모든 포스트를 보여주고
                // ALL이 아닐 경우, 선택한 카테고리와 카테고리가 일치하는 포스트만 필터링
                if(selectedCategory.toUpperCase() === 'ALL') return s;
                else return s.node.frontmatter.category.toUpperCase() === selectedCategory.toUpperCase()})
              .filter((s) => {
                if(searchValue.trim().length === 0) return s;
                else if(s.node.frontmatter.title.toUpperCase().indexOf(searchValue.trim().toUpperCase()) !== -1) return s; })
            }/>
          </div>
        </section>
      </Layout>
  )
}

export default DevPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "DEV"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
    }
}`