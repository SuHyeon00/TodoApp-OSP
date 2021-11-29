import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import { inputStyle, taskStyle } from "../styles";
import { TextInput } from "react-native-gesture-handler";
import BoxButton from './BoxButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ item, items, placeholder, setItems }) => {

    const _saveItems = async items => {
        try {
            await AsyncStorage.setItem('items', JSON.stringify(items));
            setItems(items);
        } catch (e) {
            console.error(e);
        }
    };

    // delete a item
    const _deleteItem = id => {
        const currentItems = Object.assign({}, items);
        delete currentItems[id];
        //setItems(currentItems);
        _saveItems(currentItems);
    };

    // delete all items
    const _deleteAll = id => {
        alert("진짜로 지우시겠습니까?");
        const currentItems = Object.assign({}, items);
        var array = new Array();
        for(var i=0;i<array.length;i++){
            array[i]=currentItems[id];
        };
        for(var i=0;i<array.length;i++){
            delete array[i];
        }
        //setItems(array);
        _saveItems(array);
    }

    // check a completed item
    const _toggleItem = id => {
        const currentItems = Object.assign({}, items);
        currentItems[id]['completed'] = !currentItems[id]['completed'];
        //setItems(currentItems);
        _saveItems(currentItems);
        alert(currentItems[id].date);
    };

    // select all items
    const _selectAll = id => {
        const currentItems = Object.assign({}, items);
        var arr = new Array();
        for(var i=0;i<arr.length;i++){
            arr[i]=currentItems[id];
        };
        for(var i=0;i<arr.length;i++){
            //arr[i]=arr[i]['completed'];
            _toggleItem(id);
        };
        //setItems(arr);
        
    }
    
    // edit a item
    const _updateItem = item => {
        const currentItems = Object.assign({}, items);
        currentItems[item.id] = item;
        //setItems(currentItems);
        _saveItems(currentItems);
    };

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
        <View style={taskStyle.container}>
        <BoxButton /* selectAll = {_selectAll} */ onPressOut = {_selectAll} />
        <BoxButton /* deleteAll = {_deleteAll} */ onPressOut = {_deleteAll} />
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
        </View>
    )
}



Item.propTypes = {
    item: PropTypes.object.isRequired,
    setItems: PropTypes.func.isRequired,
    _saveItems: PropTypes.func.isRequired
};

export default Item;