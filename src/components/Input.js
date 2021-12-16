import React from "react";
import { View, TextInput } from "react-native";
import { images } from "../images";
import { inputStyle } from "../styles";
import {theme} from "../theme";
import IconButton from "./IconButton";

// 1928019 Oh SuHyeon

const Input = ({ placeholder, value, setNewItem, items, saveItems, selectedDate }) => {

    // add a item(Schedule or Todo item)
    const _addItem = () => {
        if(value != '') {
            const ID = Date.now().toString();
            const d = new Date();
            const selectedDay = JSON.stringify(selectedDate).split('"');
            console.log(selectedDate);
            console.log(selectedDay);
            const date = selectedDay[3];
            const newItemObject = {
                [ID] : { id: ID, text: value, completed: false, 
                    date: date, dueDate: d.toLocaleDateString() },
            };
            setNewItem('');
            saveItems({...items, ...newItemObject});
            console.log(date);
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