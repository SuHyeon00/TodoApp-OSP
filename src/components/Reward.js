import React, { useState, useEffect, useContext } from 'react';
import { View, Alert, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from "../theme";
import { inputStyle, textStyles } from '../styles';
import { TextInput } from "react-native-gesture-handler";
import Animation from './Animation';
import IconButton from './IconButton';
import { images } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Reward = () => {

    const [newReward, setNewReward] = useState('');
    const [rewards, setRewards] = useState({});
    const [isReady, setIsReady] = useState(false);
    const [rate, setRate] = useState(0);
    const [rates, setRates] = useState(0);

    const _saveRewards = async rewards => {
        try {
            await AsyncStorage.setItem('rewards', JSON.stringify(rewards));
            setRewards(rewards);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {

        AsyncStorage.multiGet(['rate', 'rates']).then(response => {
            const loadedRate = response[0][1];
            const _rewardRate = (JSON.stringify(loadedRate));
            const _rewardString = (JSON.parse(_rewardRate));
            const _numString = _rewardString.replace(/["]+/g, '');
            const _number = parseFloat(_numString);
            setRate(_number*100);

            const loadedRates = response[1][1];
            const rewardRate = (JSON.stringify(loadedRates));
            const rewardString = (JSON.parse(rewardRate));
            const numString = rewardString.replace(/["]+/g, '');
            const number = parseInt(numString);
            setRates(number);
            setIsReady(false);
        });
    });
    
    const _handleRewardsChange = () => {
        setNewReward(newReward);
    };
    console.log({rate});
    console.log({rates});
    return isReady ? (
        <Text>Loading...</Text>
    ) : (
        <View>
            <View style = {styles.rewardInput}>
            <Text style = {{
                fontSize: 23,
                fontWeight: 'bold',
                color: theme.main,
                marginTop: 30,
            }}>Want to do</Text>
            <TextInput 
                style={inputStyle.textInput}
                placeholder="+Add a reward"
                placeholderTextColor= {theme.main}
                maxLength={20}
                value={newReward}
                onChangeText={setNewReward}
                />
            </View>
            <View style = {{
                width: Dimensions.get('window').width-70,
                height: 150,
            }}>
            { (rate >= rates) ? (
                <>
                <Text style = {{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: theme.main,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    marginTop: 80,
                }}>{newReward}</Text>
                <Animation />
                </>
            ) : (
                null
            )}
            
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
        width: Dimensions.get('window').width-80,
        marginRight: 20,
    },

})

export default Reward;