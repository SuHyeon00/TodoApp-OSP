import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {theme} from '../theme';
import PropTypes from 'prop-types';   
import IconButton from './IconButton';
import { images } from '../images';

const Schedule = ({ text }) => {
    return (
        <View style={scheduleStyle.container}>
            <IconButton type = {images.Schedulebutton} />
            <Text style ={scheduleStyle.contents}>{text}</Text>
        </View>
    )
}

const scheduleStyle = StyleSheet.create({
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

Schedule.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Schedule;