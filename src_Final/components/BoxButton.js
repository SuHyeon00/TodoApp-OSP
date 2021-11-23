import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { images } from '../images';

const BoxButton = ({type, onPressOut}) => {
    const _onPressOut = () => {
        onPressOut();
    };

    return (
        <Pressable onPressOut={_onPressOut} style = {BoxButtonStyles.button}>
            <Text style = {BoxButtonStyles.text}>Select</Text>
        </Pressable>

    );
};

BoxButton.defaultProps = {
    onPressOut: () => {},
};


const BoxButtonStyles = StyleSheet.create({
    button: {
        tintColor: theme.text,
        width: 45,
        height: 20,
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
        fontSize: 15,
        color: theme.text,
    }
});

BoxButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
};

export default BoxButton;

