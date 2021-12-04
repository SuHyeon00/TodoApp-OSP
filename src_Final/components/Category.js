import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import { categoryStyle, inputStyle, textStyles } from "../styles";
import TaskList from "./TaskList";
import { TextInput } from "react-native-gesture-handler";

const Category = ({ item, items, placeholder, saveItems }) => {

    // delete a item
    const _deleteItem = id => {
        const currentItems = Object.assign({}, items);
        delete currentItems[id];
        saveItems(currentItems);
    };
    
    // edit a item
    const _updateItem = item => {
        const currentItems = Object.assign({}, items);
        currentItems[item.id] = item;
        saveItems(currentItems);
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
        <View style={{flexDirection: 'row'}}>
                <IconButton type = {images.addCategory} />
                <TextInput style={inputStyle.textInput}
                    placeholder={placeholder}
                    placeholderTextColor= {theme.main}
                    maxLength={20}
                    value={text}
                    onChangeText={text => setText(text)}
                    onSubmitEditing={_onSubmitEditing}
                    onBlur={_onBlur}/>
        </View>
    ) : (
        <View>
            <View style={categoryStyle.container}>
                <Text style ={textStyles.category}>-- {item.text}</Text>
                <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>
                <IconButton type={images.delete} id={item.id} onPressOut={_deleteItem} /> 
            </View>
            {/* 카테고리별로 태스크 저장하는 ID값 다르게 해야할 듯 */}
            <TaskList categoryId={item.id} />

        </View>
    )
}

export default Category;