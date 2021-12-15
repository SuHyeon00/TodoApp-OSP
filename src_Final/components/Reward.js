import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { theme } from "../theme";
import { inputStyle, taskStyle } from '../styles';
import { TextInput } from "react-native-gesture-handler";
import Animation from './Animation';

const Reward = ({ rate, label }) => {

    const [rewards, setRewards] = useState('');
    const [animation, setAnimation] = useState(false);

    const _saveRewards = async rewards => {
        try {
            await AsyncStorage.setItem('rewards', JSON.stringify(rewards));
            setRewards(rewards);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadRewards = async () => {
        const loadedRewards = await AsyncStorage.getItem('rewards');
        setRewards(JSON.parse(loadedRewards));
    };

    const _addReward = () => {
        const newReward = {
            [ID] : { id: ID, text: value }
        };
        _saveRewards({...rewards, ...newReward});
    };

    const _updateReward = rewards => {
        const currentRewards = Object.assign({}, rewards);
        currentRewards[rewards.id] = rewards;
        _saveRewards(currentRewards);
    };

    const _deleteReward = id => {
        Alert.alert(
            'Warning',
            'Are you sure to delete?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

                {text: 'OK', onPress: () => {
                    const currentRewards = Object.assign({}, rewards);
                    delete currentRewards[id];
                    _saveRewards(currentRewards);}
                }
            ]
        );
    };

    /* const getRate = id => {
        if (rate > myRate ) {
            setAnimation(true);
        }
    }; */

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(rewards.text);
    
    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedRewards = Object.assign({}, rewards, {text});
            setIsEditing(false);
            if(text != '')
                _updateReward(editedRewards);
            else
                alert("Error!");
        }
    };

    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(rewards.text);
        }
    };
    return isEditing ? (
        <TextInput style={inputStyle.textInput}
            placeholder="+Add a reward"
            placeholderTextColor= {theme.main}
            maxLength={20}
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur} />
    ) : (
        <View style = {taskStyle.container}>
            
            <Animation />
            {/* <IconButton type = {images.update} onPressOut = {_handleUpdateButtonPress} />
            <IconButton type = {images.delete} id = {rewards.id} onPressOut = {_deleteReward} /> */}
        </View>
    );
};

export default Reward;