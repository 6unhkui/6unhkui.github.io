import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({searchValue, setSearchValue}) => {
    let input;
    useEffect(()=> {
        input.focus();
     }, []);

    return (
        <div className="container">
        <div className="search-wrap">
            <span className="ico-search">
                <FontAwesomeIcon icon={"search"} style={{opacity: '.15' , width: '1.2rem', height:'1.2rem'}}/>
            </span>
            <input type="text" 
               placeholder="검색어를 입력하세요."
               ref={(ref) => {input = ref;}}
               value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
        </div>
    )
}

export default Search;