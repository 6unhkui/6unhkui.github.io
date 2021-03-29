import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopButton from "components/FloatingButton/TopButton";
import DarkModeToggle from "components/FloatingButton/DarkModeToggle";
import { useSiteMetadata } from "hooks/useSiteMetadate";
import "utils/fontawesome";

interface LayoutProps {
    children: ReactNode;
    location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
    const data = useSiteMetadata();

    return (
        <div>
            <TopButton scrollStepInPx="50" delayInMs={Math.round(16.66)} />
            <DarkModeToggle />
            <Header location={location} data={data} />
            <main className="wrapper">{children}</main>
            <Footer data={data} />
        </div>
    );
};

export default Layout;
