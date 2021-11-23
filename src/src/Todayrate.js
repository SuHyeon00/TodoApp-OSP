import React, {useState} from 'react';
import { Text, SafeAreaView, View} from 'react-native';
import {viewStyles, textStyles} from './styles';
import Task from './components/Task'
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';

const Todayrate = () => {
    return(
        <SafeAreaView style={viewStyles.dailycontainer}>
            <Text style={textStyles.title}>-Today's completion rate</Text>
            <Text style={textStyles.title}>-Want to do</Text>
            <Task text = "Eat Fried Chicken!!" />
        </SafeAreaView>

    );

};

export default Todayrate;