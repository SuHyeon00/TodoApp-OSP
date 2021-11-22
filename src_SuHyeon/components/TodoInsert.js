import React, {useState} from "react";
import {Dimensions, StyleSheet, TextInput} from "react-native";
import {theme} from "../theme";

const TodoInsert = ({ onAddTodo }) => {
    const [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };

    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };

    return (
        <TextInput style={inputStyle.textInput}
        placeholder="+ Add a task"
        placeholderTextColor= {theme.main}
        maxLength={20}
        value={newTodoItem} onChangeText={todoInputHandler}
        onSubmitEditing={addTodoHandler}>
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

export default TodoInsert;