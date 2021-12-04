import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { View, Dimensions, Text, Alert } from 'react-native';
import Input from '../../src_Final/components/Input';
import Item from './Item';
import IconButton from './IconButton';
import { images } from '../images';
import { textStyles } from '../styles';

const TaskList = (categoryId) => {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = React.useState(false);

    // Managing Todo Item
    const [newTask, setNewTask] = React.useState('');
    const [tasks, setTasks] = React.useState({});

    const _saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks(tasks);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(loadedTasks || '{}'));
    };

    return isReady? (
        <View>
            <Input
                placeholder="+ Add a task"
                value={newTask}
                setNewItem={setNewTask}
                items={tasks}
                saveItems={_saveTasks}
                categoryId={categoryId}
                />
            <View style={{marginBottom: 10}} width={width-20}>
                {Object.values(tasks).reverse().map(item => (
                    <Item key={item.id} item={item}
                    items={tasks}
                    saveItems={_saveTasks}
                    categoryId={categoryId}
                    placeholder="+ Add a task" />
                ))}
            </View>
        </View> 
    ) : (
        <AppLoading
        startAsync={_loadTasks}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
}

export default TaskList;