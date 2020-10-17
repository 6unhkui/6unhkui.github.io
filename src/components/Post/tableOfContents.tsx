import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
  items : string,
  currentHeaderUrl? : string
}

const TableOfContents : React.FC<Props> = ({ items, currentHeaderUrl }) =>{
  if(items) {
    return (
      <div className="toc-wrap">
        <p className="title">
          <FontAwesomeIcon icon={"bookmark"} style={{marginRight : '8px', opacity : '.6'}}/>
          TABLE OF CONTENTS
        </p>
        <div className="content-list"
             dangerouslySetInnerHTML={{ __html: items }}
        />
      </div>
    )
  }else return (
    <></>
  )
}

export default TableOfContents;