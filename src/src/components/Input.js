import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { theme } from '../theme';

const Input = ({ value, onChangeText, onSubmitEditing, onBlur }) => {
    return (
        <TextInput style = {inputStyle.textInput}
            placeholder="+Add a task"
            placeholderTextColor= {theme.main}
            maxLength={20}
            keyboeardAppearance="dark"
            value={value} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing} onBlur={onBlur}>
        </TextInput>
    );
};

const inputStyle = StyleSheet.create({     //처음부터 얘가 있다기 보단 category 옆 +버튼을 누르면 보이는 걸루
    textInput: {
        fontSize: 20,
        width: Dimensions.get('window').width-30,
        height: 30,
        marginTop: 5,
        marginLeft: 15,
        paddingLeft: 15,
        paddingTop: 2,
        borderRadius: 0,
        backgroundColor: theme.itemBackground,
        color: theme.text,
    },
    
});

export default Input;