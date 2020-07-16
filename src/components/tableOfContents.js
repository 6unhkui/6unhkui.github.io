import React from 'react';

export default function TableOfContents({ items, currentHeaderUrl }) {
    return items ? (
      <div className="toc-wrap">
        <div>
            <h4>TABLE OF CONTENTS</h4>
            <div
                dangerouslySetInnerHTML={{ __html: items }}
            />
        </div>
      </div>
    ) : null;
  }
