import { MarkdownRemarkGroupConnection } from "graphql-types";
import React, { useCallback } from "react";

interface SwitcherProps {
    items: Pick<MarkdownRemarkGroupConnection, "fieldValue">[];
    selectedItem: string;
    onChange: (category: string) => void;
}

const Switcher: React.FC<SwitcherProps> = React.memo(({ items, selectedItem = "ALL", onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.dataset.category);
    }, []);

    return (
        <div className="switcher-wrap">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={
                        "switcher-option " + (selectedItem.toUpperCase() === item?.fieldValue?.toUpperCase() ? "selected" : "")
                    }
                    data-category={item.fieldValue}
                    onClick={handleChange}
                >
                    {item.fieldValue}
                </div>
            ))}
        </div>
    );
});

export default Switcher;
