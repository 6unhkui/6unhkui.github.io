import React from 'react';

export default function PagaTitle (props) {
    return (
        <section className="page-title-wrap">
            <div className='container'>
                <h1 className="page-title">
                    <span role="img" className="emoji">{props.emoji}</span>
                    {props.title}
                </h1>

                <div className="sub-txt">
                    {props.subtxt && props.subtxt.map(txt => (<p>{txt}</p>))}
                </div> 
            </div>
        </section>
    )
}
