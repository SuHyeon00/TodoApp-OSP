import React from "react";
import {TextInput} from "react-native";
import { inputStyle } from "../styles";
import {theme} from "../theme";

const Input = ({value, placeholder, newItem, setNewItem, items, setItems }) => {

    // add a item
    const _addItem = () => {
        const ID = Date.now().toString();
        const newItemObject = {
            [ID]: {id: ID, text: newItem, completed: false},
        };
        setNewItem('');
        setItems({...items, ...newItemObject});
    };

    const _onBlur = () => {
        setNewItem('');
    };

    const _handleTextChange = text => {
        setNewItem(text);
    };

    return (
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