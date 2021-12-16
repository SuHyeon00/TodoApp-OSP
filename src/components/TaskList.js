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

// 1976086 Kim JeongHyeon 1928019 Oh SuHyeon 2076016 Kwak SeoJin

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

    // 1976086 Kim JeongHyeon
    
    
    // delete all items 2076016 Kwak SeoJin
    
    
    // select all items 2076016 Kwak SeoJin
    

    // sort todo items in terms of the added date or due date 1976086 Kim JeongHyeon
    


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
                
                {Object.values(filteredTasks).reverse().map(item => (
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