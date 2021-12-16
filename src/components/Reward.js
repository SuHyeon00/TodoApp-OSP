import React, { useState, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from "../theme";
import { inputStyle, taskStyle } from '../styles';
import { TextInput } from "react-native-gesture-handler";
import Animation from './Animation';
import IconButton from './IconButton';
import { images } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Reward = ({ rate }) => {

    const [newReward, setNewReward] = useState('');
    const [rewards, setRewards] = useState({});
    //const [animation, setAnimation] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [rates, setRates] = useState({});

    const _saveRewards = async rewards => {
        try {
            await AsyncStorage.setItem('rewards', JSON.stringify(rewards));
            setRewards(rewards);
        } catch (e) {
            console.error(e);
        }
    };

    /* const _loadRates = async () => {
      const loadedRates = await AsyncStorage.getItem('rates');
      setRates(JSON.parse(loadedRates || '{}'));
    } */
    useEffect(() => {
        AsyncStorage.getItem('rewards').then(loadedRewards => {
            setRewards(JSON.parse(loadedRewards));

        });
        /* AsyncStorage.getItem('rates').then(loadedRates => {
            setRates(JSON.parse(loadedRates || '{}'));
        }); */
    });

    /* const _loadRewards = async () => {
        const loadedRewards = await AsyncStorage.getItem('rewards');
        

        const loadedRates = await AsyncStorage.getItem('rates');
        if(rate > loadedRates){
            setAnimation(true);
        }
    }; */

    /* const _addReward = () => {
        const newReward = {
            [ID] : { id: ID, text: value }
        };
        _saveRewards({...rewards, ...newReward});
    }; */

    /* const _updateReward = rewards => {
        const currentRewards = Object.assign({}, rewards);
        currentRewards[rewards.id] = rewards;
        _saveRewards(currentRewards);
    }; */

    //const [isEditing, setIsEditing] = useState(false);
    //const [text, setText] = useState(newReward);
    
    const _handleRewardsChange = () => {
        setNewReward(newReward);
    };

    /* const _onSubmitEditing = () => {
        if (isEditing) {
            const editedRewards = Object.assign({}, rewards, {text});
            setIsEditing(false);
            if(text != '')
                _updateReward(editedRewards);
            else
                alert("Error!");
        }
    }; */

    /* const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(rewards.text);
        }
    }; */
    return isReady ? (
        <Text>Loading...</Text>
    ) : (
        <View>
            <View style = {styles.rewardInput}>
            <Text style = {{
                fontSize: 23,
                fontWeight: 'bold',
                color: theme.main,
                //backgroundColor: theme.background,
            }}>Want to do</Text>
            <TextInput 
                style={inputStyle.textInput}
                placeholder="+Add a reward"
                placeholderTextColor= {theme.main}
                maxLength={20}
                value={newReward}
                onChangeText={setNewReward}
                //onSubmitEditing={_saveRewards} 
                />
            </View>
            <View style = {{
                width: Dimensions.get('window').width-70,
                height: 150,
            }}>
            <Text style = {{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: theme.main,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    marginTop: 100,
                    //backgroundColor: 'transparent',
                }}>{newReward}</Text>
            <Animation />
            {/* <>
            { (rate > rates) ? (
                
                <Animation />
                //setAnimation(true);
            ) : (
                null
            )}
            </> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rewardInput: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width-70,
    },

})

export default Reward;