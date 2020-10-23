import React, { createRef, RefObject, useLayoutEffect } from "react"

interface Props {
    repo : string
}

const src = 'https://utteranc.es/client.js';

const PostComment: React.FC<Props> = ({repo}) => {
    const containerRef :RefObject<any> = createRef();

    useLayoutEffect(() => {
        const utterances = document.createElement('script');

        const attributes = {
            src,
            repo,
            'issue-term': 'pathname',
            label: 'comment',
            theme: 'github-light',
            crossOrigin: 'anonymous',
            async: 'true',
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        containerRef.current.appendChild(utterances);
    }, [repo]);

    return (
        <div ref={containerRef} />
    )
}

export default PostComment;