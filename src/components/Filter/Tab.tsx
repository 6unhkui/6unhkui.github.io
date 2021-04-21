import { Category } from "hooks/useInfiniteScroll";
import React, { useCallback } from "react";

interface TabProps {
    items: string[];
    selectedItem: string;
    onChange: (category: string) => void;
}

const Tab: React.FC<TabProps> = React.memo(({ items, selectedItem = Category.All, onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.dataset.category);
    }, []);

    return (
        <div className="tab-wrap">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={"tab-option " + (selectedItem.toUpperCase() === item.toUpperCase() ? "selected" : "")}
                    data-category={item}
                    onClick={handleChange}
                >
                    {item}
                </div>
            ))}
        </div>
    );
});

export default Tab;
