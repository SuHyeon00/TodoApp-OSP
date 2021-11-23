import React, {useState} from 'react';
import {StatusBar, SafeAreaView, Text, Dimensions, View} from 'react-native';
import {viewStyles, textStyles} from './styles';
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import Task from './components/Task'
import Reply from './components/Reply';

export default function Friendscreen () {
    
    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
        setNewTask('');
    }

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <Text style={textStyles.title}>Lilly</Text>
            
            <View style={{
                flexDirection: 'row',
            }}>
            <Text style={textStyles.header}>-Today's Schedule</Text>
            </View>
            
            <View width = {width-20}>
                <Task text = "Zoom meeting at 10:00 PM" />
                <Task text = "Dinner with Whayeon" />
            </View>


            <View style={{
                flexDirection: 'row',
            }}>
            <Text style={textStyles.header}>-Category1</Text>
            </View>
            
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
            <View width = {width-20}>
                <Task text = "go jogging at 7:30 AM" />
                <Task text = "strectching before going to bed" />
                <View style={{
                    flexDirection: 'row',
                }}>
                <IconButton type = {images.replyarrow}/>
                <IconButton type = {images.account}/>
                <Text style={textStyles.item}>Wow nice!</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                <IconButton type = {images.replyarrow}/>
                <IconButton type = {images.account}/>
                <Reply/>
                </View>
                
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
            <Text style={textStyles.header}>-Category2</Text>
            
            </View>
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
            <View width = {width-20}>
                <Task text = "Todo item #1" />
                <Task text = "Todo item #2" />
            </View>
            
            <View style={{
                flexDirection: 'row',
            }}>
            <Text style={textStyles.header}>-Category3</Text>
            
            </View>
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
            <View width = {width-20}>
                <Task text = "Todo item #1" />
                <Task text = "Todo item #2" />
            </View>
            
        </SafeAreaView>
    );
};
