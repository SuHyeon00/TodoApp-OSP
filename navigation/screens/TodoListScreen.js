import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { Dimensions, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import IconButton from '../../src/components/IconButton';
import ListAll from '../../src/components/ListAll';
import { images } from '../../src/images';
import { barStyles } from '../../src/styles';
import { theme } from '../../src/theme';

// 1928019 Oh SuHyeon

export default function TodoListScreen({navigation}) {
    const width = Dimensions.get('window').width;
    const [isSorted, setIsSorted] = React.useState(false);
    const [tasks, setTasks] = React.useState({});
    const [isReady, setIsReady] = React.useState(false);

    const todo = [];

    const _loadTasks = async () => {
        
        const loadedCategories = await AsyncStorage.getItem('categories');
        // console.log(loadedCategories);
        if(loadedCategories != null){
            const id = Object.keys(JSON.parse(loadedCategories));

            for(let i=0; i < id.length; i++) {
                const loadedTasks = await AsyncStorage.getItem(JSON.stringify(id[i]));
                const loaded = Object.assign({}, JSON.parse(loadedTasks || '{}'));
                for(const id in loaded) {
                    todo.push(loaded[id]);
                }
            }
            const tmp = Object.assign({}, todo);
            setTasks(tmp);
        }
    };

    const _sortByDueDate = () => {
        const currentTasks = Object.assign({}, tasks);
        const arr = Object.values(currentTasks);

        var sortedArray;
        sortedArray = arr.sort(function(x, y) {
            return(x.dueDate > y.dueDate ? -1 : 0);
        });
        console.log(sortedArray);
        setTasks({...sortedArray});
    };

    const _sortByAddedDate = () => {
        const currentTasks = Object.assign({}, tasks);
        const arr = Object.values(currentTasks);

        var unsortedArray;
        unsortedArray = arr.sort(function(x, y) {
            return(x.id > y.id ? 1 : x.id < y.id ? -1 : 0);
        });
        console.log(unsortedArray);
        setTasks({...unsortedArray});
    }

    return isReady? (
        <View style={{flex: 1}}>
            <StatusBar style={barStyles.statusbar} />
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: theme.main,
                    alignItems: 'flex-start',
                    marginTop: 10,
                }}>Every TODO List</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPressOut={_sortByDueDate}>
                    <IconButton type={images.sort}/>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: theme.text,
                        alignItems: 'flex-start',
                        marginTop: 8,
                    }}>sort by due date</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row'}} onPressOut={_sortByAddedDate}>
                    <IconButton type={images.sort}/>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: theme.text,
                        alignItems: 'flex-start',
                        marginTop: 8,
                    }}>sort by added date</Text>
                </TouchableOpacity>
            </View>


            <View style={{ paddingLeft: 15,  marginBottom: 10, width: width-40}}>
                {Object.values(tasks).reverse().map(item => (
                    <ListAll key={item.id} item={item} />
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