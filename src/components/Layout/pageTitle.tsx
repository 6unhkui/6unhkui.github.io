import React from 'react';

interface Props {
  title : string,
  subTxt? : string[]
  emoji? : string,
}

const PageTitle: React.FC<Props> = ({ title, subTxt, emoji }) => {
    return (
        <section className="page-title-wrap">
            <div className='container'>
                <h1 className="page-title">
                    {emoji && <span role="img" className="emoji">{emoji}</span>}
                    {title}
                </h1>

                <div className="sub-txt">
                    {subTxt && subTxt.map((txt, i)=> (<p key={i}>{txt}</p>))}
                </div> 
            </div>
        </section>
    )
}

export default PageTitle;