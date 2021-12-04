import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View, ScrollView } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import CalendarWeek from '../../src_Final/components/CalendarWeek';
import ScheduleList from '../../src_Final/components/ScheduleList';
import AddCategory from '../../src_Final/components/AddCategory';

export default function TodoListScreen({navigation}) {

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            {/* Calendar */}
            <CalendarWeek />

            <ScrollView>
                <View>
                    <Text style={textStyles.category}>-- Today's Schedule</Text>
                    {/* Schedule List */}
                    <ScheduleList />
                </View>
            
                <Text style={viewStyles.divisionLine}> </Text>

                {/* Add a Category */}
                <AddCategory />
            </ScrollView>
            
            
        </SafeAreaView>
    );
}