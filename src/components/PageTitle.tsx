import React from "react";

interface PageTitleProps {
    title: string;
    subTxt?: string[];
    emoji?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subTxt, emoji }) => {
    return (
        <section className="page-title-wrap">
            <div className="container">
                <h1 className="page-title">
                    {emoji && (
                        <span role="img" className="emoji">
                            {emoji}
                        </span>
                    )}
                    {title}
                </h1>

                <div>{subTxt && subTxt.map((text, i) => <p key={i}>{text}</p>)}</div>
            </div>
        </section>
    );
};

export default PageTitle;
