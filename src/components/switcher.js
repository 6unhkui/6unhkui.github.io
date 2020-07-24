import React from 'react';

export default function Swicher({ items, selectedItem = 'ALL', changeItem}) {
    return (
        <>
            {/** Switch UI (Desktop, Tablet) */}
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

            {/** Select Box UI (Mobile) */}
            {/* <div className="select-wrap">
              <select name="category" defaultValue={selectedItem} onChange={(e) => {changeItem(e.target.value)}} >
                <option value="ALL">ALL</option>
                {items.map((v, i) => 
                    (<option value={v.fieldValue} key={i}>{v.fieldValue}</option>))}
              </select>
            </div> */}
        </>
    )
}