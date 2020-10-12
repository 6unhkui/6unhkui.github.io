import React from 'react';
import Github from '../../../static/images/github.svg';
import LinkedIn from '../../../static/images/linked-in.svg';

export default function Footer({data}) {
    return (
        <footer>
            <div className="footer-wrap container">
                <span className="copyright">© Inkyung. {new Date().getFullYear()}</span>
                <div className="social-wrap">
                    <div className="social">
                        <a href={data.social.github} target="_blank" ><img src={Github} alt="Github"/></a>
                    </div>
                    <div className="social">
                        <img src={LinkedIn} alt="LinkedIn"/>
                    </div>
                </div> 
            </div>
        </footer>
    )
}