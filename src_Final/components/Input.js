import React from "react";
import { View, TextInput } from "react-native";
import { images } from "../images";
import { inputStyle } from "../styles";
import {theme} from "../theme";
import IconButton from "./IconButton";

const Input = ({ placeholder, value, newItem, setNewItem, items, setItems }) => {

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

    return placeholder === "+ Add a Category" ? (
        <View style={{flexDirection: 'row'}}>
                <IconButton type = {images.addCategory} />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor= {theme.main}
                    maxLength={20}
                    value={value} 
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addItem}
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