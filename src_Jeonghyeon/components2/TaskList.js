import * as React from 'react';
import { useState } from 'react';
import { View, Dimensions } from 'react-native';
import Input from '../../src_Final/components/Input';
import Item from './Item';

const TaskList = () => {
    const width = Dimensions.get('window').width;

    // Managing Todo Item
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({});

    return (
        <View>
            <Input 
                value={newTask}
                placeholder="+ Add a task"
                newItem={newTask}
                setNewItem={setNewTask}
                items={tasks}
                setItems={setTasks}
                />

            <View style={{marginBottom: 10}} width={width-20}>
                {Object.values(tasks).reverse().map(item => (
                    <Item key={item.id} item={item} items={tasks}
                    setItems={setTasks}
                    placeholder="+ Add a task" />
                ))}
            </View>
        </View> 
    );
}

export default TaskList;