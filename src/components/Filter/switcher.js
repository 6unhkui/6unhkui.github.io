import React from 'react';

export default function Switcher({ items, selectedItem = 'ALL', onChange}) {
    return (
      <div className="switcher-wrap">
        <div className={'switcher-option ' + (selectedItem === 'ALL' && 'selected')}
             data-category="ALL"
             onClick={(e) => {onChange(e.target.dataset.category)}}>ALL</div>
        {items.map((v, i) =>
          (<div key={i}
                className={'switcher-option ' + (selectedItem.toUpperCase() === `${v.fieldValue.toUpperCase()}` ? 'selected' : '')}
                data-category={v.fieldValue}
                onClick={(e) => {onChange(e.target.dataset.category)}}>
            {v.fieldValue}
          </div>))}
      </div>
    )
}