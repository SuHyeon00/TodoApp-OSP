import React from "react";
import {Dimensions, StyleSheet, TextInput} from "react-native";
import {theme} from "../theme";

const Input_task = ({value, onChangeText, onSubmitEditing, onBlur }) => {
    return (
        <TextInput style={inputStyle.textInput}
        placeholder="+ Add a task"
        placeholderTextColor= {theme.main}
        maxLength={20}
        value={value} onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}>
        </TextInput>
    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 20,
        width: Dimensions.get('window').width-20,
        height: 40,
        marginLeft: 3,
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: theme.itemBackground,
        color: theme.text,
    },
});

export default Input_task;