import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import { inputStyle, taskStyle } from "../styles";
import { TextInput } from "react-native-gesture-handler";

const Item = ({ item, items, placeholder, setItems }) => {

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
};

export default Item;