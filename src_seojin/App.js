/*import React from 'react';
import { Text, View, StatusBar } from 'react-native';
//import Login from './views/Login';
//import SignUp from './views/SignUp';
import { viewStyles, textStyles, barStyles } from './styles';
import DailyReport from './views/DailyReport';


export default function App() {
  return (
    <View style = {viewStyles.container}>
        <StatusBar barStyle = "light-content" style = {barStyles.statusbar} />
        <DailyReport />
    </View>
  );
};

/*
<DailyReport />
*/

import React, {useState} from 'react';
import {StatusBar, SafeAreaView, Text, Dimensions, View, ScrollView} from 'react-native';
import {viewStyles, textStyles, iconStyles} from './styles';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';
import { theme } from './theme';

export default function App() {
    
    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({
        '1': {id: '1', text: "go jogging at 7:30 AM", completed: false},
        '2': {id: '2', text: "strectching before going to bed", completed: true},
    });

    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: {id: ID, text: newTask, completed: false},
        };
        setNewTask('');
        setTasks({...tasks, ...newTaskObject});
    };

    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    };

    /*
    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
    };

    const _onBlur = () => {
        setNewTask('');
    };
    */
    const _handleTextChange = text => {
        setNewTask(text);
    };
   

    return (
        <SafeAreaView style={viewStyles.container}>
            {/* <SafeAreaView style = {{
                flex: 1,
                flexDirection: 'row',
            }}> */}
                <Text style={textStyles.title}>Me</Text>
            {/* </SafeAreaView> */}
            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={textStyles.header}>-Today's Schedule</Text>
                <IconButton type = {images.edits}
                style = {iconStyles.right}/>   
            </View>
            
            <View width = {width-20}>
                <Task text = "Zoom meeting at 10:00 PM" />
                <Task text = "Dinner with Whayeon" />
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <Text style = {textStyles.header}>-Todo List</Text>
                <IconButton type = {images.edits}
                style = {iconStyles.right}/> 
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
            <Text style={textStyles.item}>-Category1</Text>
            <IconButton type = {images.additem}
            style={iconStyles.small}/>
            </View>
            
            <Input value = {newTask} 
            onChangeText = {_handleTextChange} 
            onSubmitEditing = {_addTask}
            />
            <View width = {width-20}>
                {Object.values(tasks).reverse().map(item => (
                    /* <Task text = "go jogging at 7:30 AM" 
                    toggleTask = {_toggleTask} />
                    <Task text = "strectching before going to bed"
                    toggleTask = {_toggleTask} /> */
                    <Task 
                        key = {item.id}
                        item = {item}
                        toggleTask = {_toggleTask}
                        //updateTask = {_updateTask}
                    />
                    //<Task text = "go jogging" toggleTask = {_toggleTask} />
                ))}
                <View style={{
                    flexDirection: 'row',
                }}>
                    <IconButton type = {images.replyarrow}/>
                    <IconButton type = {images.account}/>
                    <Text style={textStyles.item}>Wow nice!</Text>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={textStyles.header}>-Category2</Text>
                <IconButton type = {images.additem}/>
            </View>
            <Input 
                placeholder = "+Add a task"
                placeholderTextColor= {theme.main}
                value={newTask} 
                onChangeText={_handleTextChange} 
                onSubmitEditing={_addTask}
            />
            <View width = {width-20}>
                <Task text = "Todo item #1" />
                <Task text = "Todo item #2" />
            </View>
            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={textStyles.header}>-Category3</Text>
                <IconButton type = {images.additem}/>
            </View>
            <Input 
                value={newTask} 
                onChangeText={_handleTextChange} 
                onSubmitEditing={_addTask}
                
            />
            <View width = {width-20}>
                <Task text = "Todo item #1" />
                <Task text = "Todo item #2" />
            </View>
            
            
        </SafeAreaView>
    );
};