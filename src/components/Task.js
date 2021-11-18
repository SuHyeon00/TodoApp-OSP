import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {theme} from '../theme';
import PropTypes from 'prop-types';   
import IconButton from './IconButton';
import { images } from '../images';

const Task = ({ text }) => {
    return (
        <View style={taskStyle.container}>
            <IconButton type = {images.uncompleted} />
            <Text style ={taskStyle.contents}>{text}</Text>
        </View>
    )
}

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
    text: PropTypes.string.isRequired,
};

export default Task;
