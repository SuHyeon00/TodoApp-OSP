import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { View, Dimensions, Text, Alert } from 'react-native';
import Input from '../../src_Final/components/Input';
import Item from './Item';
import IconButton from './IconButton';
import { images } from '../images';
import { textStyles } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TaskList = ({ categoryId, selectedDate }) => {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = React.useState(false);

    // Managing Todo Item
    const [newTask, setNewTask] = React.useState('');
    const [tasks, setTasks] = React.useState({});

    const [isSorted, setIsSorted] = React.useState(false);

    const _saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem(JSON.stringify(categoryId) , JSON.stringify(tasks));
            setTasks(tasks);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem(JSON.stringify(categoryId));
        setTasks(JSON.parse(loadedTasks || '{}'));
    };
    
    // delete all items
    const _deleteAll = id => {
        Alert.alert(
            'Warning',
            'Are you sure to delete all?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

              {text: 'OK', onPress: () => {
                const currentItems = Object.assign({}, tasks);
                for(const id in currentItems){
                    delete currentItems[id];
                }
                _saveTasks(currentItems);
              }}
            ]
        );
    }
    
    // select all items
    const _selectAll = () => {
        const currentItems = Object.assign({}, tasks);

        for(const id in currentItems){
            currentItems[id]['completed'] = true;
        }
        _saveTasks(currentItems);
    }

    // sort todo items in terms of the added date or due date
    const _sortByDate = () => {
        setIsSorted(true);
        
        const currentTasks = Object.assign({}, tasks);
        const arr = Object.values(currentTasks);
        if(isSorted === false){
            var sortedArray;
            sortedArray = arr.sort(function(x, y) {
                return(x.dueDate > y.dueDate ? -1 : 0);
            });
            console.log(sortedArray);
            setTasks({...sortedArray});
            setIsSorted(true);
        }
        else{
            var unsortedArray;
            unsortedArray = arr.sort(function(x, y) {
                return(x.id > y.id ? 1 : x.id < y.id ? -1 : 0);
            });
            console.log(unsortedArray);
            setTasks({...unsortedArray});
            setIsSorted(false);
        }      
    };


    return isReady? (
        <View>
            <Input
                placeholder="+ Add a task"
                value={newTask}
                setNewItem={setNewTask}
                items={tasks}
                saveItems={_saveTasks}
                selectedDate={selectedDate} 
                />
                

            <View style={{marginBottom: 10, width: width-40}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPressOut={_deleteAll}>
                        <IconButton type={images.deleteAll}/>
                        <Text style={textStyles.comment}>delete all</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: 'row'}} onPressOut={_selectAll}>
                        <IconButton type={images.selectAll}/>
                        <Text style={textStyles.comment}>select all</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: 'row'}} onPressOut={_sortByDate}>
                        <IconButton type={images.sort}/>
                        <Text style={textStyles.comment}>change order</Text>
                    </TouchableOpacity>
                </View>
                
                {Object.values(tasks).reverse().map(item => (
                   <Item key={item.id} item={item}
                        items={tasks}
                        saveItems={_saveTasks}
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