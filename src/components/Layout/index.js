import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import TopButton from '../FloatingButton/topButton'
import DarkModeToggle from "../FloatingButton/darkModeToggle";
import { useSiteMetadata } from "../../hooks/useSiteMetadate"
import '../../utils/fontawesome'

const Index = ({children, location}) => {
  const data = useSiteMetadata();

  return ( 
    <div className='wrapper'> 
      <TopButton scrollStepInPx="50" delayInMs="16.66"/>
      <DarkModeToggle/>
      <Header location={location} data={data}/>
      <main>{children}</main>
      <Footer data={data}/>
    </div>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
