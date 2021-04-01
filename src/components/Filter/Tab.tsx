import { MarkdownRemarkGroupConnection } from "graphql-types";
import React, { useCallback } from "react";

interface TabProps {
    items: Pick<MarkdownRemarkGroupConnection, "fieldValue">[];
    selectedItem: string;
    onChange: (category: string) => void;
}

const Tab: React.FC<TabProps> = React.memo(({ items, selectedItem = "ALL", onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.dataset.category);
    }, []);

    return (
        <div className="tab-wrap">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={"tab-option " + (selectedItem.toUpperCase() === item?.fieldValue?.toUpperCase() ? "selected" : "")}
                    data-category={item.fieldValue}
                    onClick={handleChange}
                >
                    {item.fieldValue}
                </div>
            ))}
        </div>
    );
});

export default Tab;
