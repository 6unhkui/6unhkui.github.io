import React from 'react';

export default function Swicher({ items, selectedItem = 'ALL', changeItem}) {
    return (
            <div className="switcher-wrap container">
              <div className={'switcher-option ' + (selectedItem === 'ALL' && 'selected')} 
                  data-category="ALL"
                  onClick={(e) => {changeItem(e.target.dataset.category)}}>ALL</div>
              {items.map((v, i) => 
                (<div key={i} 
                  className={'switcher-option ' + (selectedItem.toUpperCase() === `${v.fieldValue.toUpperCase()}` ? 'selected' : '')} 
                  data-category={v.fieldValue}
                  onClick={(e) => {changeItem(e.target.dataset.category)}}>{v.fieldValue}</div>))}
            </div>
    )
}