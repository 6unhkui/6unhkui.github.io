import React from "react";
import Github from "../../../static/images/github.svg";
import LinkedIn from "../../../static/images/linked-in.svg";
import { SiteMetadata } from "../../interfaces/SiteMetadata";

interface Props {
    data: SiteMetadata;
}

const Footer: React.FC<Props> = React.memo(({ data }) => {
    const {
        social: { github }
    } = data;

    return (
        <footer>
            <div className="footer-wrap container">
                <span className="copyright">© Inkyung. {new Date().getFullYear()}</span>
                <div className="social-wrap">
                    <div className="social">
                        <a href={github} target="_blank">
                            <img src={Github} alt="Github" />
                        </a>
                    </div>
                    <div className="social">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
