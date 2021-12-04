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


    // delete all items 
    // !!!!카테고리별 삭제 되도록 수정!!!!
    const _deleteAll = id => {
        Alert.alert(
            'Warning',
            'Are you sure to delete all?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

              {text: 'OK', onPress: () => {
                const currentItems = Object.assign({}, tasks);
                var array = new Array();
                for(var i=0;i<array.length;i++){
                    array[i]=currentItems[id];
                };
                for(var i=0;i<array.length;i++){
                    delete array[i];
                }
                //setItems(array);
                _saveTasks(array);}}
            ]
          );
    }

    // select all items
    const _selectAll = () => {
        const currentItems = Object.assign({}, tasks);
        var arr = new Array();
        for(var i=0; i<arr.length; i++){
            arr[i]=currentItems[id];
        };
        for(var i=0;i<arr.length;i++){
            arr[i]['completed']=true;
        };
        //setItems(arr);
        _saveTasks(arr);
    }

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
            <View style={{flexDirection: 'row'}}>
                <IconButton type={images.deleteAll} onPressOut={_deleteAll} />
                <Text style={textStyles.comment}>delete all</Text>

                <IconButton type={images.selectAll} onPressOut={_selectAll} />
                <Text style={textStyles.comment}>select all</Text>
            </View>
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