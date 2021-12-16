import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles';
import { theme } from '../theme';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AppLoading from 'expo-app-loading';
//import Context from './Context';

const CompletionRate = (categoryId) => {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = useState(false);
    const [rate, setRate] = useState();
    //const [tasks, setTasks] = useState({});

    /* const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem(JSON.stringify(categoryId));
        setTasks(JSON.parse(loadedTasks || '{}'));
    }; */

    /* const _loadCompletion = async () => {
        //const loadedCompletion = await AsyncStorage.getItem('tasks');
        const loadedTasks = await AsyncStorage.getItem(
            'categoryId'
        );
        const tasks = Object.assign({}, JSON.parse(loadedTasks));
        const todo = Object.values(tasks);
        console.log(loadedTasks); //null로 찍힌다... 못 받아오는 듯...

        const completion = todo.filter((tasks) => tasks.completed).length;
        const total = todo.length;
        console.log({completion});
        console.log({total})
        const percent = total ? (completion / total).toFixed(2)*100 : 0;

        //console.log(percent);
        setRate(percent);
    }; */


    //const loadedCategories = AsyncStorage.getItem('categories');

    const loadedCategories = AsyncStorage.getItem('categories');
    console.log(loadedCategories);

    useEffect(() => {
        //key값을 사용해서 저장된 값 읽어오기
        //비동기 방식. 명령 호출하자마자 결과가 오지 않음.
        //따라서 .then() 메소드 사용.
        AsyncStorage.getItem(JSON.stringify(categoryId)).then(loadedTasks => {//변수: loadedTasks
            const todo = Object.values(JSON.parse(loadedTasks || '{}'));
            console.log(todo); //아예 안 찍힘.

            const completion = todo.filter((tasks) => tasks.completed === true).length;
            const total = todo.length;
            console.log({completion});//0
            console.log({total});//0
            const percent = total ? (completion / total).toFixed(2)*100 : 0;
            setIsReady(false);
            setRate(percent);
            //setTasks(loadedTasks);
            
            //const tasks = Object.assign({}, loadedTasks/* JSON.parse(loadedTasks) */);   
        });
    }, []/* , [rate] */); //[] 안에 값이 업데이트 될 때만 실행.

    
    /*
    useeffect 안에 getitem.then(loadedTasks => {
        setTasks(loadedTasks);
        setRate(percent);
        setIsReady(false);
    }
    
     */

    /* const todo = Object.values(tasks);   
    useEffect(()=> {
        
        const completion = todo.filter((tasks) => tasks.completed).length;
        const total = todo.length;

        const percent = total ? (completion / total).toFixed(2)*100 : 0;
            
        setRate(percent);
    }, [todo]); */

    /* const _checkedCount = id => {
        const currentItems = Object.assign({}, items);
        var arr = new Array();
        for(var i=0;i<arr.length;i++){
            arr[i]=currentItems[id];
        };
        let count = 0;
        let ratio = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]['completed'] === true) {
                count++;
            }
        }

        if (arr.length === 0) {
        ratio = 0;
        } else if (arr.length > 0) {
        ratio = count / arr.length;
        } else {
        ratio = 0;
        }

        //console.log(Number(ratio.toFixed(2)));
        return Number(ratio.toFixed(2));
    }; */

    return isReady ? (
        <Text>Loading...</Text>
    ) : (
        <View>
            <Progress.Bar 
                //progress = {Number(_checkedCount)}
                progress = {rate}
                //progress = {0.3}
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
    );/*  : (
        <AppLoading
        startAsync={_loadCompletion}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    ); */
};

/* CompletionRate.propTypes = {
    tasks: PropTypes.object,
} */


export default CompletionRate;