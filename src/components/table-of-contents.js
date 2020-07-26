import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TableOfContents({ items, currentHeaderUrl }) {
    return items ? (
      <div className="toc-wrap">
        <div>
            <p className="title"><FontAwesomeIcon icon={"bookmark"} style={{marginRight : '8px', opacity : '.6'}}/>TABLE OF CONTENTS</p>
            <div className="content-list"
                dangerouslySetInnerHTML={{ __html: items }}
            />
        </div>
      </div>
    ) : null;
  }
