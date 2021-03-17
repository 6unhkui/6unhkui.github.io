import React, { useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const SearchIco = React.memo(() => {
    return <FontAwesomeIcon icon={"search"} className="ico-search" />;
});

const Search: React.FC<Props> = React.memo(({ value, onChange }) => {
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
