import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { theme } from "../theme";
import { inputStyle } from '../styles';
import { TextInput } from "react-native-gesture-handler";
import Animation from './Animation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../images';

const Reward = () => {

    //const [newReward, setNewReward] = useState('');
    const [rewards, setRewards] = useState('');
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
            if(_rewardString != null){
                const _numString = _rewardString.replace(/["]+/g, '');
                const _number = parseFloat(_numString);
                setRate(_number*100);
            }
            
            const loadedRates = response[1][1];
            const rewardRate = (JSON.stringify(loadedRates));
            const rewardString = (JSON.parse(rewardRate));
            if(rewardString != null){
                const numString = rewardString.replace(/["]+/g, '');
                const number = parseInt(numString);
                setRates(number);
            }
            
            setIsReady(false);
        });
    
    });
    
    AsyncStorage.getItem('rewards').then(loadedRewards => {
        const _rewardStringify = (JSON.stringify(loadedRewards));
        const _rewardParse = (JSON.parse(_rewardStringify));
        if(_rewardParse != null){
            const _reward = _rewardParse.replace(/["]+/g, '');
            setRewards(_reward);
        }
    });
        
    //console.log({rate});
    //console.log({rates});
    //console.log(rewards);

    const handleConfirm = () => {
        _saveRewards(rewards);
    };

    return isReady ? (
        <Text>Loading...</Text>
    ) : (
        <View>
            <View style = {styles.rewardInput}>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: theme.main,
                    marginTop: 10,
                    justifyContent: 'flex-start',
                    marginRight: 10,
                    
                }}>Want to do</Text>
                <TextInput 
                    style={{
                        width: 220,
                        height: 40,
                        justifyContent: 'flex-end',
                        marginRight: 10,
                        color: theme.text,
                        backgroundColor: "#E5E5E5",
                        borderRadius: 10,
                        fontSize: 18,
                        marginTop: 10,
                        marginLeft: 10,
                        paddingLeft: 5,
                    }}
                    placeholder="+ Add a reward"
                    placeholderTextColor= {theme.main}
                    maxLength={20}
                    value={rewards}
                    onChangeText={(value)=>{_saveRewards(value);}}
                    />
            </View>

            <View style = {{
                width: Dimensions.get('window').width-70,
                height: 150,
            }}>
            { (rate >= rates) ? (
                <>
                <Animation />
                </>
            ) : (
                <Image style={{ width: 240, height: 150, 
                    marginVertical: 15, marginHorizontal: 45, 
                    position: 'absolute' }} 
                    source={images.More} />
            )}
            
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rewardInput: {
        alignItems: 'center',
        //justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width-80,
        marginRight: 20,
        flexDirection: 'row',
    },

});

export default Reward;