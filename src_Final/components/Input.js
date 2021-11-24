import React from "react";
import {TextInput} from "react-native";
import { inputStyle } from "../styles";
import {theme} from "../theme";

const Input = ({value, placeholder, onChangeText, onSubmitEditing, onBlur }) => {
    return (
        <TextInput style={inputStyle.textInput}
        placeholder={placeholder}
        placeholderTextColor= {theme.main}
        maxLength={20}
        value={value} onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}>
        </TextInput>
    );
};

export default Input;
