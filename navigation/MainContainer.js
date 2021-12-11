import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../src_Final/theme';

// Screens
import CalendarScreen from './screens/CalendarScreen';
import TodoListScreen from './screens/TodoListScreen';
import CompletionRateScreen from './screens/CompletionRateScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names
const calendarName = 'Calendar';
const todoListName = 'Todo List';
const CompletionRate = 'Completion Rate';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={todoListName}
                screenOptions={
                    ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === todoListName) {
                            iconName = focused ? 'list' : 'list-outline';
                        }
                        else if (rn === calendarName) {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (rn === CompletionRate) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: theme.main,
                    tabBarInactiveTintColor: theme.Grey,
                    tabBarLabelStyle: { paddingBottom: 5, fontSize: 10},
                })}>

                <Tab.Screen name={todoListName} component={TodoListScreen} />
                <Tab.Screen name={calendarName} component={CalendarScreen} />
                <Tab.Screen name={CompletionRate} component={CompletionRateScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}