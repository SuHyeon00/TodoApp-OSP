import React from "react";
import { View, TextInput } from "react-native";
import { images } from "../images";
import { inputStyle } from "../styles";
import {theme} from "../theme";
import IconButton from "./IconButton";

const Input = ({ placeholder, value, setNewItem, items, saveItems, categoryId }) => {

    // add a item(Schedule or Todo item)
    const _addItem = () => {
        alert(`Add: ${value}`);
        const ID = Date.now().toString();
        const newItemObject = {
            [ID]: {id: ID, text: value, completed: false, categoryId: categoryId },
        };
        setNewItem('');
        saveItems({...items, ...newItemObject});
    };

    // add a category
    const _addCategory = () => {
        alert(`Add: ${value}`);
        const ID = Date.now().toString();
        const newItemObject = {
            [ID]: {id: ID, text: value },
        };
        setNewItem('');
        saveItems({...items, ...newItemObject});
    };

    const _onBlur = () => {
        setNewItem('');
    };

    const _handleTextChange = text => {
        setNewItem(text);
    };

    return placeholder === "+ Add a Category" ? (
        <View style={{flexDirection: 'row'}}>
                <IconButton type = {images.addCategory} />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor= {theme.main}
                    maxLength={20}
                    value={value} 
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addCategory}
                    onBlur={_onBlur}>
                </TextInput>
        </View>
    ) : (
        <TextInput style={inputStyle.textInput}
            placeholder={placeholder}
            placeholderTextColor= {theme.main}
            maxLength={20}
            value={value} 
            onChangeText={_handleTextChange}
            onSubmitEditing={_addItem}
            onBlur={_onBlur}>
        </TextInput>
    );
};

export default Input;