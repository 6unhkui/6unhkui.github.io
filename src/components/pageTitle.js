import React from 'react';

export default function PagaTitle (props) {
    return (
        <h1 style={{marginBottom : '1.2rem'}}><span role="img" style={{marginRight: '14px'}}>{props.emoji}</span>{props.title}</h1>
    )
}
