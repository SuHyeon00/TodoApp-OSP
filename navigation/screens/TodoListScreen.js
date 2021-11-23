import * as React from 'react';
import { useState } from 'react';
import { StatusBar, SafeAreaView, Text, Dimensions, View, ScrollView } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import Input from '../../src_Final/components/Input';
import Task from '../../src_Final/components/Task';
import Schedule from '../../src_Final/components/Schedule';

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
