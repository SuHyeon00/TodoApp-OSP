import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View, ScrollView } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import CalendarWeek from '../../src_Final/components/CalendarWeek';
import ScheduleList from '../../src_Final/components/ScheduleList';
import AddCategory from '../../src_Final/components/AddCategory';
import ShareExample from '../../src_Final/components/ShareExample';

export default function TodoListScreen({navigation}) {

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            {/* Calendar */}
            <CalendarWeek />

            <ScrollView>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={textStyles.schedule}> Today's Schedule</Text>
                        <ShareExample />
                    </View>
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