import React from 'react';

export default function TableOfContents({ items, currentHeaderUrl }) {
    return items ? (
      <div className="toc-wrap">
        <div>
            {/* <p>TABLE OF CONTENTS</p> */}
            <div
                dangerouslySetInnerHTML={{ __html: items }}
            />
        </div>
      </div>
    ) : null;
  }
