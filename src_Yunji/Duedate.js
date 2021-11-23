import React, {useState} from 'react';
import { Text, SafeAreaView, View} from 'react-native';
import {viewStyles, textStyles} from './styles';
import Task from './components/Task'
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Memo from './components/Memo';

const Duedate = () => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: "#ffffff",
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text style={textStyles.title}>DueDate</Text>
        <Memo />
        <View style={{
            flexDirection: 'row',
        }}>
        <IconButton type = {images.check}/>
        <IconButton type = {images.cancel}/>
        </View>
        </SafeAreaView>
    );
};

export default Duedate;