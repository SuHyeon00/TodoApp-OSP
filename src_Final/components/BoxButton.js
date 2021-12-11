import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { images } from '../images';

const BoxButton = ({ onPress, label }) => {
    return (
        <Pressable onPress = {onPress} 
            style = {styles.button}>
            <Text style = {styles.text}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.lightGreen,
        borderColor: theme.background,
        borderWidth: 0.5,
        alignItems: 'center',
        width: 200,
        height: 30,
        borderRadius: 5
    },
    text: {
        fontSize: 15,
        color: theme.background,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BoxButton;
