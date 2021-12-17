import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { theme } from '../theme';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const CompletionRate = ({isToday}) => {
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

    let today = moment().format('YYYY-MM-DD');

    const todo = [];

    // Weekly
    let StartOfWeek = moment().day(1).format('YYYY-MM-DD');
    let EndOfWeek = moment().day(7).format('YYYY-MM-DD')

    // Monthly
    let startOfMonth = moment(today.split('-')[0] + today.split('-')[1] + "01").format('YYYY-MM-DD');
    let endOfMonth = moment(today.split('-')[0] + today.split('-')[1] + moment().daysInMonth()).format('YYYY-MM-DD');

    useEffect(async () => {
        
        const loadedCategories = await AsyncStorage.getItem('categories');
        // console.log(loadedCategories);
        const id = Object.keys(JSON.parse(loadedCategories));

        for(let i=0; i < id.length; i++) {
            const loadedTasks = await AsyncStorage.getItem(JSON.stringify(id[i]));
            const loaded = Object.assign({}, JSON.parse(loadedTasks || '{}'));
            for(const id in loaded) {
                todo.push(loaded[id]);
            }
        }
        console.log(todo);
        let completion = 0;
        let total = 0;
    
        if(isToday === "Today") { // Today's Completion Rate
            completion = todo.filter((tasks) => 
            (tasks.completed === true) && tasks.date === today).length;
            total = todo.filter((tasks) => tasks.date === today).length;
        } else if(isToday === "Weekly") { // Weekly's Completion Rate
            completion = todo.filter((tasks) => 
            (tasks.completed === true) && 
            (tasks.date >= StartOfWeek && tasks.date <= EndOfWeek)).length;
            total = todo.filter((tasks) =>  
            tasks.date >= StartOfWeek && tasks.date <= EndOfWeek).length;
        } else { // Monthly's Completion Rate
            completion = todo.filter((tasks) => 
            (tasks.completed === true) && 
            (tasks.date >= startOfMonth && tasks.date <= endOfMonth)).length;
            total = todo.filter((tasks) =>  
            tasks.date >= startOfMonth && endOfMonth).length;
        }

        const percent = total ? Number((completion / total).toFixed(2)) : 0;
        console.log(percent);
        setIsReady(false);
        _saveRate(percent);
        
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
