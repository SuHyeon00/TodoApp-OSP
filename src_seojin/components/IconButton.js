import React from 'react';
import { Pressable, StyleSheet, View, Image } from 'react-native';
import { theme } from '../theme';
import PropTypes from 'prop-types';
import { images } from '../images';
import { iconStyles } from '../styles';

const IconButton = ({type, onPressOut, id}) => {

    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
        <Pressable onPressOut={_onPressOut}>
            <Image source ={type}
            style={iconStyles.icon}/>
        </Pressable>
    );
};


IconButton.defaultProps = {
    onPressOut: () => {}
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed: PropTypes.bool,
};

export default IconButton;