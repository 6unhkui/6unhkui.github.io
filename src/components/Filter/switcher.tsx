import React, {useCallback} from "react"
import { Category } from "../../interfaces/PostList"
import propTypes from 'prop-types';


interface Props {
  items : Category[];
  selectedItem: string;
  onChange : (category: string) => void;
}

const Switcher: React.FC<Props> = ({ items, selectedItem, onChange}) => {
    const handleChange = useCallback(event => {
      onChange(event.target.dataset.category)
    },[]);
    
    return (
      <div className="switcher-wrap">
        {items.map((item, i) =>
          (<div key={i}
                className={'switcher-option ' + 
                          (selectedItem.toUpperCase() === item.fieldValue.toUpperCase() ? 'selected' : '')}
                data-category={item.fieldValue}
                onClick={handleChange}>
            {item.fieldValue}
          </div>))}
      </div>
    )
}

export default Switcher;

Switcher.defaultProps = {
  selectedItem : 'ALL'
}