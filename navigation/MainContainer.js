import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../src/theme';

// Screens
import CalendarScreen from './screens/CalendarScreen';
import MainScreen from './screens/MainScreen';
import CompletionRateScreen from './screens/CompletionRateScreen';
import SettingsScreen from './screens/SettingsScreen';
import TodoListScreen from './screens/TodoListScreen';

// Screen names
const calendarName = 'Calendar';
const MainName = 'Main';
const CompletionRate = 'Completion Rate';
const settingsName = 'Settings';
const TodoListName = 'Todo List'

const Tab = createBottomTabNavigator();

// 1928019 Oh SuHyeon

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={MainName}
                screenOptions={
                    ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === MainName) {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (rn === calendarName) {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (rn === CompletionRate) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (rn === TodoListName) {
                            iconName = focused ? 'list' : 'list-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: theme.main,
                    tabBarInactiveTintColor: theme.Grey,
                    tabBarLabelStyle: { paddingBottom: 5, fontSize: 10},
                })}>

                
                <Tab.Screen name={TodoListName} component={TodoListScreen} />
                <Tab.Screen name={calendarName} component={CalendarScreen} />
                <Tab.Screen name={MainName} component={MainScreen} />
                <Tab.Screen name={CompletionRate} component={CompletionRateScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}