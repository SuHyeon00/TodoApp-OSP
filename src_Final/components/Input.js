import React from "react";
import { View, TextInput } from "react-native";
import { images } from "../images";
import { categoryStyle, inputStyle } from "../styles";
import {theme} from "../theme";
import IconButton from "./IconButton";
import ShareExample from "./ShareExample";

const Input = ({ placeholder, value, setNewItem, items, saveItems }) => {

    // add a item(Schedule or Todo item)
    const _addItem = () => {
        if(value != '') {
            const ID = Date.now().toString();
            const d = new Date();
            const newItemObject = {
                [ID] : { id: ID, text: value, completed: false, dueDate: d.toLocaleDateString() }, // 데이트 저장하는 부분 따로 안 두고 ID값으로 불러와도 될 듯?!
            };
            setNewItem('');
            saveItems({...items, ...newItemObject});
            console.log(d.toLocaleDateString());
        }
    };

    // add a category
    const _addCategory = () => {
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
        <View style={{flexDirection: 'row', paddingTop: 5}}>
                <IconButton type = {images.addCategory} />
                <TextInput style={inputStyle.categoryInput}
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