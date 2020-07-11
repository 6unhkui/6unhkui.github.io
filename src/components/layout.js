import React, {useState} from "react"
import PropTypes from "prop-types"
import Header from "./header"
import TopButton from './topButton';
// import "../styles/layout.scss";

const Layout = ({ children, location, menu}) => {
  return (
    <div className='wrapper'> 
      <TopButton scrollStepInPx="50" delayInMs="16.66"/>
      <Header location={location} menu={menu}/>
    
      <main>{children}</main>

      <footer>
        © Inkyung. {new Date().getFullYear()}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
