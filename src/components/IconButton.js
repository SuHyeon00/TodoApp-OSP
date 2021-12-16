import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import { images } from '../images';

// 1976086 Kim JeongHyeon

const IconButton = ({type, onPressOut, id}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
        <Pressable onPressOut={_onPressOut}>
            <Image source={type} style={iconStyle.icon}/>
        </Pressable>
    );
};

IconButton.defaultProps = {
    onPressOut: () => {},
};

const iconStyle = StyleSheet.create({
    icon: {
        tintColor: theme.text,
        width: 20,
        height: 20,
        margin: 10,
    },
});

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
};

export default IconButton;