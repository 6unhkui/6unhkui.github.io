import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import TopButton from '../FloatingButton/topButton'
import DarkModeToggle from "../FloatingButton/darkModeToggle";
import { useSiteMetadata } from "../../hooks/useSiteMetadate"
import '../../utils/fontawesome'


interface Props {
  children : ReactNode,
  location : Location
}

const Index:React.FC<Props> = ({children, location}) => {
  const data = useSiteMetadata();

  return ( 
    <div className='wrapper'> 
      <TopButton scrollStepInPx="50" delayInMs={Math.round(16.66)}/>
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
