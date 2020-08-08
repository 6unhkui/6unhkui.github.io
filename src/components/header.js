import React, {useState} from "react"
import { Link } from "gatsby"
import Logo from "../../static/images/logo.svg";

const Header = ({ data, location }) => {
const [showMenu, setShowMenu] = useState(false);
const site = data.site.siteMetadata;
const path = location.pathname.substr(1).split("/")[0].toUpperCase();

return (
  <header className={(showMenu ? 'open' : '')} >
    <div className="header-wrap container">
      <div className="logo-wrap">
          <Link to="/">
            <img src={Logo} alt={site.title} className="logo"/>
          </Link>
      </div>

      <nav className="menu-wrap">
        <div className={"menu-toggle-wrap " + (showMenu ? 'open' : '')} onClick={() => {setShowMenu(!showMenu)}}>
          <div className="menu-toggle">
            <div className="menu-ico">
              <span></span>
            </div>
          </div>
        </div> 

        <div className={"menu-list-wrap " + (showMenu ? 'open' : '')}>
          <div className="menu-list">
          {site.menuLinks.map(link => (
            <h4 key={link.name} className={'menu' + (link.name.toUpperCase() == path ? ' selected' : '')}>
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
