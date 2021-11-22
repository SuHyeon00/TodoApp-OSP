import React, {useState} from 'react';
import {StatusBar, SafeAreaView, Text, Dimensions, View, ScrollView} from "react-native";
import {viewStyles, textStyles, barStyles} from './styles';
import Input_task from './components/Input_task';
import Task from './components/Task';

export default function App() {

    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({});

    // add a task
    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: {id: ID, text: newTask, completed: false},
        };
        setNewTask('');
        setTasks({...tasks, ...newTaskObject});
    };

    // delete a task
    const _deleteTask = id => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    };

    // check a completed task
    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);

    };

    // edit a task
    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
    };

    const _onBlur = () => {
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            
            {/* Header */}
            <Text style={textStyles.title}>My ToDo List</Text>
            
            {/* Calendar */}
            <View>
                <Text style={textStyles.category}>-- Today's Schedule</Text>
            </View>
            
            <Text style={viewStyles.divisionLine}> </Text>

            <Text style={textStyles.category}>-- Category 1</Text>
            <Input_task value={newTask} onChangeText={_handleTextChange} 
            onSubmitEditing={_addTask} onBlur={_onBlur}/>
            <ScrollView width={width-20}>
                {Object.values(tasks).reverse().map(item => (
                    <Task key={item.id} item={item}
                    deleteTask={_deleteTask} toggleTask={_toggleTask}
                    updateTask={_updateTask} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};