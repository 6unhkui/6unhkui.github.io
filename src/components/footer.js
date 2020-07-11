import React from 'react';
import Github from '../../static/images/github.svg';
import LinkedIn from '../../static/images/linkedin.svg';

export default function Footer({data}) {
    const site = data.site.siteMetadata;

    return (
        <footer>
            <div className="footer-wrap container">
                <span className="copyright">© Inkyung. {new Date().getFullYear()}</span>
                <div className="social-wrap">
                    <div className="social">
                        <a href={site.social.github} target="_blank" ><img src={Github} alt="Github"/></a>
                    </div>
                    <div className="social">
                        <img src={LinkedIn} alt="LinkedIn"/>
                    </div>
                </div> 
            </div>
        </footer>
    )
}