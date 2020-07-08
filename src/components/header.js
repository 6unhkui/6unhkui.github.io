import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Mimoji from '../../static/images/header_mimoji.png';
import Github from '../../static/images/github.svg';
import LinkedIn from '../../static/images/linkedin.svg';

const Header = ({ location, category}) => {
  console.log(location)
  const data = useStaticQuery(graphql`
    query HeaderQuery {
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
  
const site = data.site.siteMetadata;
const path = location.pathname.substr(location.pathname.lastIndexOf('/') + 1).toUpperCase();

return (
  <header>
    <div className="bg"></div>

    <div className="container">
      <div>
        <img src={Mimoji} style={{width: '90px'}}/>
        
        <h1 className="logo">
          <Link to="/">
            {site.title}
          </Link>
        </h1>

        <p className="description">{site.description}</p>

        <div className="social-wrap">
          <div className="social">
            <a href={site.social.github} target="_blank" ><img src={Github}/><span>Github</span></a>
          </div>

          <div className="social"><img src={LinkedIn}/><span>LinkedIn</span></div>
        </div> 
      </div>

      <div className="gnb-wrap">
          {site.menuLinks.map(link => (
            <h3 key={link.name} 
                className={'gnb' + (link.name.toUpperCase() == path
                                    || (location.pathname == '/' && link.name.toUpperCase() == 'HOME') 
                                    || category && link.name.toUpperCase() == category.toUpperCase() ? ' selected' : '')}>
              <Link to={link.link}>
                {link.name}
              </Link>
            </h3>
            ))}
      </div> 
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
