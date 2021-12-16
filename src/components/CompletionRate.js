import React, { useState, useEffect, useContext, createContext } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles';
import { theme } from '../theme';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CompletionRate = () => {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = useState(false);

    const [rate, setRate] = useState();

    const _saveRate = async rate => {
        try {
            await AsyncStorage.setItem('rate', JSON.stringify(rate));
            setRate(rate);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(async () => {
        const loadedCategories = await AsyncStorage.getItem('categories');
        console.log(loadedCategories);
        const id = Object.keys(JSON.parse(loadedCategories));
        console.log(id);

        for(let i=0; i < id.length; i++) {
            AsyncStorage.getItem(JSON.stringify(id[i])).then(loadedTasks => {
                const todo = Object.values(JSON.parse(loadedTasks || '{}'));
                console.log(todo); 
    
                const completion = todo.filter((tasks) => tasks.completed === true).length;
                const total = todo.length;
                console.log({completion});
                console.log({total});
                const percent = total ? Number((completion / total).toFixed(2)) : 0;
                setIsReady(false);
                _saveRate(percent);
            });
        }
        
    });

    return isReady ? (
        <Text>Loading...</Text>
    ) : (
        <View>
            <Progress.Bar 
                progress = {rate}
                width = {width-30}
                height = {30}
                animated = {true}
                color = {theme.Green}
                unfilledcolor = {theme.itemBackground}
                borderWidth = {1}
                borderColor = {theme.Green}
            />
            <Text>{rate*100}%</Text>
        </View>
    );
};

export default CompletionRate;