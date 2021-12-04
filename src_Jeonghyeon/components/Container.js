import { memo, useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Item } from './Item';
import { Input } from '/Input';
import update from 'immutability-helper';


export const Container = memo(function Container() {
    const [items, setItems] = useState(newItemObject);
    const findItem = useCallback((id) => {
        const item = items.filter((c) => `${c.id}` === id)[0];
        return {
            item: item,
            index: items.indexOf(item),
        };
    }, [items]);
    const moveItem = useCallback((id, atIndex) => {
        const { item: item, index } = findItem(id);
        setCards(update(items, {
            $splice: [
                [index, 1],
                [atIndex, 0, item],
            ],
        }));
    }, [findItem, items, setItems]);
    const [, drop] = useDrop(() => ({ accept: Item }));
    return (<div ref={drop} >
			{items.map((item) => (<Item key={item.id} id={`${item.id}`} text={item.text} moveItem={moveItem} findItem={findItem}/>))}
		</div>);
});
