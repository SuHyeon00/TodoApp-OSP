import React, { useState } from "react";

export function _addItem() {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState({});

    const ID = Date.now().toString();
    const newItemObject = {
        [ID]: {id: ID, text: newItem, completed: fasle},
    };
    setNewItem('');
    setItems({...items, ...newItemObject});

    return { items }
};

