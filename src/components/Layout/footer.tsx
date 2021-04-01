import React from "react";
import Github from "static/images/github.svg";
import LinkedIn from "static/images/linked-in.svg";
import { SiteSiteMetadata } from "graphql-types";

interface FooterProps {
    data: SiteSiteMetadata;
}

const Footer: React.FC<FooterProps> = React.memo(({ data }) => {
    const github = data.social?.github || "";

    return (
        <footer>
            <div className="footer-wrap container">
                <span className="copyright">© Inkyung. {new Date().getFullYear()}</span>
                <div className="social-wrap">
                    <div className="social">
                        <a href={github} target="_blank" rel="noreferrer noopener">
                            <img src={Github} alt="Github" width={32} height={32} />
                        </a>
                    </div>
                    <div className="social">
                        <img src={LinkedIn} alt="LinkedIn" width={32} height={32} />
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
