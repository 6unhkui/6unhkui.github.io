import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({value, onChange}) => {
  let input;
  useEffect(()=> {
    input.focus();
  }, []);


  return (
      <div className='search-wrap'>
          <FontAwesomeIcon icon={"search"} className='ico-search'/>
          <input type="text"
                 placeholder="검색어를 입력하세요."
                 value={value}
                 onChange={(e) => onChange(e.target.value)}
                 className="search-input"
                 ref={(ref) => {input = ref;}}
          />
      </div>

    )
}

export default Search;