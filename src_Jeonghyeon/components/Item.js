import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes, { nominalTypeHack } from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import { inputStyle, taskStyle } from "../styles";
import { Container } from './Container';
import { TextInput } from "react-native-gesture-handler";
import { DragDropContext } from 'react-beautiful-dnd';

const Item = ({ id, text, item, items, placeholder, setItems, moveItem, findItem, pressItem }) => {

    // press an item
    const _pressItem = id => {
        const currentItems = Object.assign({}, items);
        setItems(currentItems);
        pressItem(id);
        alert('Item is pressed');
    }

    // delete a item
    const _deleteItem = id => {
        const currentItems = Object.assign({}, items);
        delete currentItems[id];
        setItems(currentItems);
    };

    // check a completed item
    const _toggleItem = id => {
        const currentItems = Object.assign({}, items);
        currentItems[id]['completed'] = !currentItems[id]['completed'];
        setItems(currentItems);
        alert(currentItems[id].date)
    };
    
    // edit a item
    const _updateItem = item => {
        const currentItems = Object.assign({}, items);
        currentItems[item.id] = item;
        setItems(currentItems);
    };

    // move a item
    /*
    const originalIndex = findItem(id).index;

    const [{ isDragging }, dragRef ] = useDrag(
        ()=> ({
            type: Item,
            item: { id, originalIndex },
            collect: (monitor) => ({
                isDragging: monitor.isDragging() // inDragging 변수가 현재 드래깅중인지 아닌지를 리턴
            }),
            end: (item, monitor) => { // 드래그가 끝났을 때 작동하는 부분
                const { id: droppedId, originalIndex } = item;
                const didDrop = monitor.didDrop();
                if(!didDrop){
                    moveItem(droppedId, originalIndex);
                }
            }
        }),
        [id, originalIndex, moveItem]
    );
    const [, drop] = useDrop(
        () => ({
          accept: Item,
          canDrop: () => false,
          hover({ id: draggedId }) {
            if (draggedId !== id) {
              const { index: overIndex } = findItem(id);
              moveItem(draggedId, overIndex);
            }
          }
        }),
        [findItem, moveItem]
    );
    const opacity = isDragging ? 0 : 1;
    */

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);
    
    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedItem = Object.assign({}, item, {text});
            setIsEditing(false);
            _updateItem(editedItem);
        }
    };

    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };

    function ondragstart_handler(event){
        dataTransfer.setData('text/plain', event.target.id);
        $('#' + event.target.id).addClass('placeholder');
    }

    function ondragend_handler(event){
        $('#' + event.target.id).removeClass('placeholder');
    }

    function ondragover_handler(e){
        e.preventDefault();

        if(e.target.className === 'draggable'){
            const parent = document.getElementById(e.target.id);
            const child = document.getElementById(draggable);
            parent.after(child);
        }
    }

    function ondrop_handler(event) {
        const id = event.dataTransfer.getData('text');
        const dragItem = document.getElementById(id);
        const dropzone = event.target.id;
    }



    return isEditing ? (
        
        <TextInput style={inputStyle.textInput}
            placeholder={placeholder}
            placeholderTextColor= {theme.main}
            maxLength={20}
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}/>
    ) : (
        <div ref={(node) => drag(drop(node))} style={{ ...style, opacity }}>
                {text}
            
            <View style={taskStyle.container}>
                <DragDropContext onDragEnd={(...props)=>{console.log(props)}}>
                <div class="draggable">
                    onPressOut ={_pressItem}
                    <IconButton type = {item.completed ? images.completed : images.uncompleted}
                        id = {item.id}
                        onPressOut = {_toggleItem}
                        completed = {item.completed} />
                    <Text style ={[taskStyle.contents,
                        {color: (item.completed ? theme.done : theme.text)},
                        {textDecorationLine: (item.completed ? 'line-through' : 'none')}]}>
                        {item.text}</Text>
                    {item.completed || (<IconButton type={images.update}
                        onPressOut={_handleUpdateButtonPress}/>)}

                    <IconButton type={images.delete} id={item.id} onPressOut={_deleteItem} />
                </div>
                </DragDropContext>
            </View>
        </div>
    )
}



Item.propTypes = {
    item: PropTypes.object.isRequired,
    setItems: PropTypes.func.isRequired,
    onPressOut: PropTypes.func,
};

export default Item;