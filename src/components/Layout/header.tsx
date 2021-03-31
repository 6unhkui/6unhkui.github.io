import React, { useState } from "react";
import { Link } from "gatsby";
import LogoImg from "static/images/logo.svg";
import HamburgerMenu from "react-hamburger-menu";
import BodyClassName from "react-body-classname";
import { SiteSiteMetadata } from "graphql-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = React.memo(({ title }: { title: string }) => {
    return (
        <div className="logo-wrap">
            <Link to="/">
                <img src={LogoImg} alt={title} className="logo" />
            </Link>
        </div>
    );
});

interface HeaderProps {
    data: SiteSiteMetadata;
    location: Location;
}

const Header: React.FC<HeaderProps> = React.memo(({ data, location }) => {
    const { title, menuLinks } = data;
    const [openMenu, setOpenMenu] = useState(false);
    const path = location.pathname.substr(1).split("/")[0].toUpperCase();

    const menuItems = () => (
        <ul>
            {menuLinks?.map((link, i) => (
                <li key={i} className={"menu " + (link?.name?.toUpperCase() === path ? "active" : "")}>
                    <Link to={link?.link || ""} onClick={setOpenMenu.bind(null, false)} target={link?.target || " _self"}>
                        {link?.name}
                        {link?.target === "_blank" ? (
                            <FontAwesomeIcon icon={"external-link-alt"} style={{ marginLeft: "4px" }} />
                        ) : null}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <BodyClassName className={openMenu ? "open" : ""}>
            <header>
                <div className="header-wrap container">
                    <Logo title={title || ""} />

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

                    <nav className="menu-wrap">{menuItems()}</nav>
                </div>

                <div className="sidebar">{menuItems()}</div>
            </header>
        </BodyClassName>
    );
});

export default Header;
