import * as React from 'react';
import { useState } from 'react';
import { StatusBar, SafeAreaView, Text, Dimensions, View, ScrollView } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import Input from '../../src_Final/components/Input';
import Task from '../../src_Final/components/Task';
import Schedule from '../../src_Final/components/Schedule';

export default function TodoListScreen({navigation}) {

    const width = Dimensions.get('window').width;
    // Managing Todo Item
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

    const _handleTextChangeTask = text => {
        setNewTask(text);
    };

    // Managing Schedule
    const [newSchedule, setNewSchedule] = useState('');
    const [schedules, setSchedules] = useState({});

    // add a schedule
    const _addSchedule = () => {
        const ID = Date.now().toString();
        const newScheduleObject = {
            [ID]: {id: ID, text: newSchedule, completed: false},
        };
        setNewSchedule('');
        setSchedules({...schedules, ...newScheduleObject});
    };

    // delete a task
    const _deleteSchedule = id => {
        const currentSchedules = Object.assign({}, schedules);
        delete currentSchedules[id];
        setSchedules(currentSchedules);
    };

    // check a completed task
    const _toggleSchedule = id => {
        const currentSchedules = Object.assign({}, schedules);
        currentSchedules[id]['completed'] = !currentSchedules[id]['completed'];
        setSchedules(currentSchedules);
    };

    // edit a task
    const _updateSchedule = item => {
        const currentSchedules = Object.assign({}, schedules);
        currentSchedules[item.id] = item;
        setSchedules(currentSchedules);
    };

    const _handleTextChangeSchedule = text => {
        setNewSchedule(text);
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            {/* Calendar */}
            <View>
                <Text style={textStyles.category}>-- Today's Schedule</Text>
            </View>
            <Input value={newSchedule} onChangeText={_handleTextChangeSchedule} 
            onSubmitEditing={_addSchedule}/>
            <View style={{marginBottom: 10}} width={width-20}>
                {Object.values(schedules).reverse().map(item => (
                    <Schedule key={item.id} item={item}
                    deleteSchedule={_deleteSchedule} toggleSchedule={_toggleSchedule}
                    updateSchedule={_updateSchedule} />
                ))}
            </View>
            
            <Text style={viewStyles.divisionLine}> </Text>

            <Text style={textStyles.category}>-- Category 1</Text>
            <Input value={newTask} onChangeText={_handleTextChangeTask} 
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
}