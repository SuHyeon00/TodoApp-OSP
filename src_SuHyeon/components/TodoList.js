import React from "react";
import { StyleSheet, ScrollView, Text, Dimensions } from "react-native";
import ListItem from "./ListItem";

const TodoList = ({todos, onRemove, onToggle, update}) => {
    return (
        <ScrollView width={Dimensions.get('window').width}>
            {todos.map(todo => (
                <ListItem key={todo.id} {...todo}
                onRemove={onRemove} onToggle={onToggle} update={update} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;