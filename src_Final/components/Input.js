import React from "react";
import {Dimensions, StyleSheet, TextInput} from "react-native";
import { inputStyle } from "../styles";
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

export default Input_task;