import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Github from '../../static/images/github.svg';
import LinkedIn from '../../static/images/linkedin.svg';
import Logo from '../../static/images/logo.png';

const Header = ({ data, location, menu}) => {
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
      </nav>
    </div>
  </header>
  )
}

export default Header
