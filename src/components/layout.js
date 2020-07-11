import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import TopButton from './topButton'

const Layout = ({ children, location, menu}) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        social {
          github
          linkedin
        }
        menuLinks {
          name
          link
        }
      }
    }
   
 }
`); 

  return ( 
    <div className='wrapper'> 
      <TopButton scrollStepInPx="50" delayInMs="16.66"/>
      <Header location={location} data={data} menu={menu}/>
      <main>{children}</main>
      <Footer data={data}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
