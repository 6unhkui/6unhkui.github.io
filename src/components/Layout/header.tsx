import React, {useState, useCallback} from "react"
import { Link } from "gatsby"
import Logo from "../../../static/images/logo.svg";
import { SiteMetadata } from "../../interfaces/SiteMetadata"
import HamburgerMenu from 'react-hamburger-menu';

interface Props {
  data : SiteMetadata,
  location : Location
}

const Header:React.FC<Props> = ({ data, location }) => {
const [showMenu, setShowMenu] = useState(false);
const path = location.pathname.substr(1).split("/")[0].toUpperCase();

const closeMenu = () => setShowMenu(false);
const toggleMenu = () => setShowMenu(showMenu => !showMenu);

return (
  <header className={(showMenu ? 'open' : '')} >
    <div className="header-wrap container">
      <div className="logo-wrap">
          <Link to="/">
            <img src={Logo} alt={data.title} className="logo"/>
          </Link>
      </div>

      <div className={'hamburger-btn ' + (showMenu ? 'open' : '')}>
          <HamburgerMenu
            isOpen={showMenu}
            menuClicked={toggleMenu}
            width={28}
            height={16}
            strokeWidth={3}
            rotate={0}
            color={showMenu ? '#fff' : '#000'}
            animationDuration={0.5}
          />
      </div>

      <nav className="menu-wrap">
        <div className={"menu-list-wrap " + (showMenu ? 'open' : '')}>
          <div className="menu-list">
          {data.menuLinks.map(link => (
            <h4 key={link.name} className={'menu' + (link.name.toUpperCase() === path ? ' selected' : '')}>
              <Link to={link.link} onClick={closeMenu}>
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
