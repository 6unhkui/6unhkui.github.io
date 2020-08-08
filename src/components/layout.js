import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import TopButton from './top-button'
import DarkmodeToggle from "../components/darkmode-toggle";
import '../utils/fontawesome'

const Layout = ({ children, location}) => {
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
      <DarkmodeToggle/>
      <Header location={location} data={data}/>
      <main>{children}</main>
      <Footer data={data}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
