import * as React from 'react';
import { useState } from 'react';
import { View, Dimensions } from 'react-native';
import Input from '../../src_Final/components/Input';
import Task from '../../src_Final/components/Task';

const TaskList = () => {
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

    return (
        <View>
            <Input value={newTask} placeholder="+ Add a task"
                onChangeText={_handleTextChangeTask} 
                onSubmitEditing={_addTask} onBlur={_onBlur}/>
            <View width={width-20}>
                {Object.values(tasks).reverse().map(item => (
                    <Task key={item.id} item={item}
                    deleteTask={_deleteTask} toggleTask={_toggleTask}
                    updateTask={_updateTask} />
                ))}
            </View>
        </View> 
    );
}

export default TaskList;
