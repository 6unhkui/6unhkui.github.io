import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import LogoImg from "../../../static/images/logo.svg";
import { SiteMetadata } from "../../interfaces/SiteMetadata";
import HamburgerMenu from "react-hamburger-menu";
import BodyClassName from "react-body-classname";

interface Props {
    data: SiteMetadata;
    location: Location;
}

const Logo = React.memo(({ title }: { title: string }) => {
    return (
        <div className="logo-wrap">
            <Link to="/">
                <img src={LogoImg} alt={title} className="logo" />
            </Link>
        </div>
    );
});

const Header: React.FC<Props> = React.memo(({ data, location }) => {
    const { title, menuLinks } = data;
    const [openMenu, setOpenMenu] = useState(false);
    const path = location.pathname.substr(1).split("/")[0].toUpperCase();

    const renderMenu = () => (
        <ul>
            {menuLinks.map(link => (
                <li key={link.name} className={"menu " + (link.name.toUpperCase() === path ? "active" : "")}>
                    <Link to={link.link} onClick={setOpenMenu.bind(null, false)}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <BodyClassName className={openMenu ? "open" : ""}>
            <header>
                <div className="header-wrap container">
                    <Logo title={title} />

                    <div className={"hamburger-btn " + (openMenu ? "open" : "")}>
                        <HamburgerMenu
                            isOpen={openMenu}
                            menuClicked={setOpenMenu.bind(null, !openMenu)}
                            width={28}
                            height={16}
                            strokeWidth={3}
                            rotate={0}
                            color={openMenu ? "#fff" : "#000"}
                            animationDuration={0.5}
                        />
                    </div>

                    <nav className="menu-wrap">{renderMenu()}</nav>
                </div>

                <div className="sidebar">{renderMenu()}</div>
            </header>
        </BodyClassName>
    );
});

export default Header;
