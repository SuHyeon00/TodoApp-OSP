import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../theme';
import PropTypes from 'prop-types';   
import IconButton from './IconButton';
import Input from './Input';
import { images } from '../images';

const Task = ({ item, toggleTask }) => {
    /*
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item?.text);

    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if(isEditing) {
            const editedTask = Object.assign({}, item, {text});
            setIsEditing(false);
            updateTask(editedTask);
        }
    };

    const _onBlur = () => {
        if(isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };
    */
    return /*isEditing ? */(
        /*
        <Input value = {text} 
            onChangeText = {text => setText(text)}
            onSubmitEditing = {_onSubmitEditing}
            onBlur = {_onBlur} /> 
    ) : (*/
        <View style={taskStyle.container}>
            <IconButton type = {item?.completed ? images.completed : images.uncompleted}
                id = {item?.id}
                onPressOut = {toggleTask}
                completed = {item?.completed} />
            <Text style ={[taskStyle.contents,
                {textDecorationLine: (item?.completed ? 'line-through' : 'none')}]}>
            {item?.text}</Text>
        </View>
    );
};

const taskStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderRadius: 0,
        padding: 0,
        marginTop: 3,
        marginLeft: 0,
    },

    contents: {
        flex: 1,
        fontSize: 20,
        color: theme.text,

    },
});

Task.propTypes = {
    item: PropTypes.object.isRequired,
    //deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
};

export default Task;
