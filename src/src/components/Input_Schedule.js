import React from "react";
import {Dimensions, StyleSheet, TextInput} from "react-native";
import {theme} from "../theme";

const Input = ({value, onChangeText, onSubmitEditing }) => {
    return (
        <TextInput style={inputStyle.textInput}
        placeholder="+ Add a Schedule"
        placeholderTextColor= {theme.main}
        maxLength={20}
        value={value} onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}>
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

export default Input;