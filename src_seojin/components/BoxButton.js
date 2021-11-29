import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { images } from '../images';

const BoxButton = ({ id, onPressOut, label, selectAll, deleteAll}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
        <Pressable onPressOut={_onPressOut} style = {BoxButtonStyles.button}>
            <Text style = {BoxButtonStyles.text}>{label}</Text>
        </Pressable>

    );
};

BoxButton.defaultProps = {
    onPressOut: () => {},
};


const BoxButtonStyles = StyleSheet.create({
    button: {
        tintColor: theme.text,
        width: 40,
        height: 20,
        marginVertical: 10,
        marginLeft: 10,
        borderColor: theme.text,
        borderWidth: 1,
        
        //margin: 10,
        /* backgroundColor: theme.background,
        width: 99,
        height: 37,
        borderColor: theme.text,
        borderWidth: 1,
        marginTop: 30,
        alignItems: 'center' */
    },
    text: {
        fontSize: 13,
        color: theme.text,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

BoxButton.propTypes = {
    //type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    label: PropTypes.string,
};

export default BoxButton;

