import React, {useCallback} from "react"
import { Category } from "../../interfaces/PostList"
import propTypes from 'prop-types';


interface Props {
  items : Category[];
  selectedItem: string;
  onChange : (category:string) => void;
}

const Switcher: React.FC<Props> = ({ items, selectedItem, onChange}) => {

    const handleChange = useCallback(event => {
      onChange(event.target.dataset.category)
    },[]);

    return (
      <div className="switcher-wrap">
        <div className={'switcher-option ' + (selectedItem === 'ALL' && 'selected')}
             data-category="ALL"
             onClick={handleChange}>ALL</div>
        {items.map((v, i) =>
          (<div key={i}
                className={'switcher-option ' + 
                          (selectedItem.toUpperCase() === `${v.fieldValue.toUpperCase()}` ? 'selected' : '')}
                data-category={v.fieldValue}
                onClick={handleChange}>
            {v.fieldValue}
          </div>))}
      </div>
    )
}

export default Switcher;

Switcher.defaultProps = {
  selectedItem : 'ALL'
}