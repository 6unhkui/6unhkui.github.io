import React, { createRef, RefObject, useLayoutEffect } from "react";

const src = "https://utteranc.es/client.js";

interface PostCommentProps {
    repo: string;
}

const PostComment: React.FC<PostCommentProps> = ({ repo }) => {
    const containerRef: RefObject<any> = createRef();

    useLayoutEffect(() => {
        const utterances = document.createElement("script");

        const attributes = {
            src,
            repo,
            "issue-term": "pathname",
            label: "comment",
            theme: "github-light",
            crossOrigin: "anonymous",
            async: "true"
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        containerRef.current.appendChild(utterances);
    }, [repo]);

    return <div ref={containerRef} />;
};

export default PostComment;
