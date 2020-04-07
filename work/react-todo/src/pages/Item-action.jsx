import React, {useState, memo, useCallback} from "react";

const ItemActions = memo(({refreshItems, addItem}) => {
    const [newItem, setNewItem] = useState("");
    const handleInput = useCallback((event) => {
        const value = event.target.value;
        setNewItem(value);
    }, [])
    const handleAdd = useCallback(() => {
        addItem(newItem).finally(()=>{
            setNewItem("");
        });
    }, [addItem, newItem]);
    return (
        <div className="new-item">
            <span>New item:</span>
            <input type="text"
                minLength={1}
                value={newItem}
                onChange={handleInput}
            />
            <button onClick={handleAdd}>Add</button>
            <button onClick={refreshItems} className="refresh">Refresh</button>
        </div>
    );
});

export default ItemActions;