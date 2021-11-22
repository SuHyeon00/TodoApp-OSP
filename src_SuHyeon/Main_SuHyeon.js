import React, {useState} from 'react';
import { SafeAreaView, Text, View, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import {viewStyles, barStyles, textStyles} from './styles';
import TodoInsert from './components/TodoInsert';
import ScheduleInsert from './components/ScheduleInsert';
import TodoList from './components/TodoList';
import ScheduleList from './components/ScheduleList';


export default function App() {
    // Manage Todo List
    const [todos, setTodos] = useState([]);
    // Add a Todo item
    const addTodo = text => {
        setTodos([
            ...todos,
            {id: Date.now().toString(), textValue: text, checked: false},
        ]);
    };
    // Remove a Todo item
    const onRemoveTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    // Check a completed todo item
    const onToggleTodo = id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo),
        );
    };
    // Edit a Todo item
    const updateTodo = ({text, id}) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, textValue: text} : todo),
        );
    };

    // Manage Schedule List
    const [schedules, setSchedules] = useState([]);
    // Add a Schedule
    const addSchedule = text => {
        setSchedules([
            ...schedules,
            {id: Date.now().toString(), textValue: text, checked: false},
        ]);
    };
    // Remove a Schedule
    const onRemoveSchedule = id => {
        setSchedules(schedules.filter(schedule => schedule.id !== id));
    };
    // Check a completed schedule
    const onToggleSchedule = id => {
        setSchedules(
            schedules.map(schedule =>
                schedule.id === id ? {...schedule, checked: !schedule.checked} : schedule,
            ),
        );
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />

            {/* Header */}
            <Text style={textStyles.title}>My ToDo List</Text>

            {/* Calendar */}

            <View>
                <Text style={textStyles.category}>-- Today's Schedule</Text>
                <ScheduleList schedules={schedules} onRemove={onRemoveSchedule} onToggle={onToggleSchedule} />
                <ScheduleInsert onAddSchedule={addSchedule} />
            </View>

            <Text style={viewStyles.divisionLine}> </Text>

            <View>
                {/* Category.js 파일 만들어서 카테고리 추가 삭제 관리 가능하도록(grouping) */}
                <Text style={textStyles.category}>-- Category 1</Text>
                <TodoList todos={todos} onRemove={onRemoveTodo} onToggle={onToggleTodo} />
                <TodoInsert onAddTodo={addTodo} />
            </View>

            {/* Navigation Bar */}

        </SafeAreaView>
    );
};