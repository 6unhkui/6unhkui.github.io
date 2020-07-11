import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
// import styled from "styled-components"
// import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import Mimoji from '../../static/images/header_img.png';
import Github from '../../static/images/github.svg';
import LinkedIn from '../../static/images/linkedin.svg';
import Logo from '../../static/images/logo.png';

const Header = ({ location, menu}) => {
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

const [showMenu, setShowMenu] = useState(false);

const site = data.site.siteMetadata;
const path = location.pathname.substr(location.pathname.lastIndexOf('/') + 1).toUpperCase();

return (
  <header>
    <div className="header-wrap container">
      <div className="logo-wrap">
        {/* <h1 className="logo"> */}
          <Link to="/">
            <img src={Logo} alt={site.title} className="logo"/>
            {/* {site.title} */}
          </Link>
        {/* </h1> */}  
      </div>

      <nav className="menu-wrap">
        <div className={"menu-toggle-wrap " + (showMenu ? 'open' : '')} onClick={() => {showMenu ? setShowMenu(false) : setShowMenu(true)}}>
          <div className="menu-toggle">
            <div className="menu-ico">
              <span></span>
            </div>
          </div>
        </div> 

        <div className={"menu-list-wrap " + (showMenu ? 'open' : '')}>
          <div className="menu-list">
          {site.menuLinks.map(link => (
            <h4 key={link.name} 
                className={'menu' + (link.name.toUpperCase() == path
                                    || (location.pathname == '/' && link.name.toUpperCase() == 'HOME') 
                                    || menu && link.name.toUpperCase() == menu.toUpperCase() ? ' selected' : '')}>
              <Link to={link.link} onClick={() => setShowMenu(false)}>
                {link.name}
              </Link>
            </h4>
            ))}
            </div>
        </div>

        <div className="social-wrap">
          <div className="social">
            <a href={site.social.github} target="_blank" ><img src={Github} alt="Github"/></a>
          </div>
          <div className="social"><img src={LinkedIn} alt="LinkedIn"/>
          </div>
        </div> 
      </nav>
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
