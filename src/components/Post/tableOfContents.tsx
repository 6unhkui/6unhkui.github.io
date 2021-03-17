import React, { useEffect, useMemo, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    items: string;
    currentHeaderUrl?: string;
}

const TableOfContents: React.FC<Props> = ({ items, currentHeaderUrl }) => {
    const replaceItems = useMemo(() => {
        if (currentHeaderUrl) {
            return items.replace(`"${currentHeaderUrl}"`, `"${currentHeaderUrl}" class="current"`);
        } else {
            return items;
        }
    }, [items, currentHeaderUrl]);

    return items ? (
        <div className="toc-wrap">
            <p className="title">
                <FontAwesomeIcon icon={"bookmark"} style={{ marginRight: "8px", opacity: ".6" }} />
                TABLE OF CONTENTS
            </p>
            <div className="content-list" dangerouslySetInnerHTML={{ __html: replaceItems }} />
        </div>
    ) : null;
};

export default TableOfContents;
