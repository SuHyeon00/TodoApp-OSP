import * as React from 'react';
import { useState } from "react";
import {StyleSheet,TextInput, View, Dimensions, Text, Image, Modal, Pressable} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';


const RateInput = ({value, onChangeText, onSubmitEditing }) => {

    const [newRate, setNewRate] = useState('');
    const [rates, setRates] = useState({});

    const [isReady, setIsReady] = React.useState(false);

    const _saveRate = async rates => {
        try {
            await AsyncStorage.setRates('rates', JSON.stringify(rates));
            setRates(rates);
        } catch (e) {
            console.error(e);
        }
    }

    const _updateRate = rate => {   
      const currentRate = Object.assign({}, rates);
      currentRate[rate.id] = rate;
      _saveRate(currentRate);
    };

    const _loadRates = async () => {
        const loadedRates = await AsyncStorage.getItem('rates');
        setRates(JSON.parse(loadedRates || '{}'));
    }


    const _handleRateChange = text =>{
      setNewRate(text);
    };

    const _onBlur = () => {
        if (isEditing){
            setNewRate('');
        }
    };

    return isReady ? (
        <View style={{flexDirection:'row'}}>
            <Text style={styles.texts}>Completion rate</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNewRate}
                value={newRate}
                placeholder=""
                keyboardType="number-pad"
                maxLength={3}
                onSubmitEditing={onSubmitEditing}
                updateRate={setNewRate}
            />
            <Text style={styles.texts}>%</Text>
        </View>
    )   :   (
        <AppLoading
        startAsync={_loadRates}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
};

const styles = StyleSheet.create({
    input: {
      width: 45,
      height: 40,
      margin: 8,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    texts:{
        fontSize:17,
        marginTop: 17,
        fontWeight: "bold",
        marginRight: 5,
        marginLeft: 10,
    }
  });

export default RateInput;