import React from 'react';
import { /*Pressable,*/ TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { theme } from '../theme';

export default class BoxButton extends React.Component {
    
    static defaultProps = {
        title: 'untitled',
        onPress: () => null,
    };

    constructor(props) {
        super(props);
    };

    render(){
        return(
            /*<Pressable style = {BoxButtonStyles.button}>
                <Text style = {BoxButtonStyles.text} />
            </Pressable>
            */
            <TouchableOpacity style = {BoxButtonStyles.button} onPress = {this.props.onPress}>
                <Text style = {BoxButtonStyles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
};

const BoxButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: theme.background,
        width: 99,
        height: 37,
        borderColor: theme.text,
        borderWidth: 1,
        marginTop: 30,
        alignItems: 'center'
    },
    text: {
        fontSize: 17,
        color: theme.text,
    }
});

