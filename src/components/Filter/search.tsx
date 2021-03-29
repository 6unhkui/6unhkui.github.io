import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchIco = React.memo(() => {
    return <FontAwesomeIcon icon={"search"} className="ico-search" />;
});

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = React.memo(({ value, onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.value);
    }, []);

    return (
        <div className="search-wrap">
            <SearchIco />
            <input
                type="text"
                placeholder="검색어를 입력하세요."
                value={value}
                onChange={handleChange}
                className="search-input"
            />
        </div>
    );
});

export default Search;
