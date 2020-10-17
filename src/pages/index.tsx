import React from "react"
import {graphql } from "gatsby"
import Index from "../components/Layout"
import Posts from "../components/Post/posts"
import SEO from "../components/seo"
import Typed from 'react-typed';
import { AllMarkdownRemark, Query } from "../models/ListQuery"


interface Props {
  data : Query;
  location: Location;
}
const HomePage : React.FC<Props> =  ({data, location}) => {
  return (
    <Index location={location}>
      <SEO title={'index'}/>
      <section className="page-title-wrap">
          <div className='container'>
          <div>
          <h1 className="page-title">
            <span style={{display: 'block'}}>Hello!</span>
            <Typed strings={['I\'m Inkyung', 'a Web Developer']}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay={900}
                    showCursor
                    loop
                />
          </h1>
          <div className="sub-txt">
            <p>안녕하세요. 웹 개발자 심인경입니다. <span role="img" aria-label="emoji">👩‍💻</span></p>
          </div>
          </div>
        </div>
      </section>

      <section className="posts-wrap index">
        <div className="posts container">
          <h1 className="section-title">
            <span role="img" aria-label="emoji">✏️ </span>Recent Posts
          </h1>
          <Posts posts={data.allMarkdownRemark.edges}/>
        </div>
      </section>
    </Index>
  );
}

export default HomePage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/^((?!/til/).)*$/"}}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
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
    }
}`

