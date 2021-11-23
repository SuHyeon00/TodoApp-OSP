import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import CalendarWeek from '../../src_Final/components/CalendarWeek';
import TaskList from '../../src_Final/components/TaskList';
import ScheduleList from '../../src_Final/components/ScheduleList';

export default function TodoListScreen({navigation}) {

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            {/* Calendar */}
            <CalendarWeek />
            <View>
                <Text style={textStyles.category}>-- Today's Schedule</Text>
            </View>
            {/* Schedule List */}
            <ScheduleList />
            
            <Text style={viewStyles.divisionLine}> </Text>

            {/* Category */}
            <Text style={textStyles.category}>-- Category 1</Text>
            {/* Todo Item */}
            <TaskList />
                
        </SafeAreaView>
    );
}
