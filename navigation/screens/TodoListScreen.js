import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View, ScrollView } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import CalendarWeek from '../../src_Final/components/CalendarWeek';
import TaskList from '../../src_Final/components/TaskList';
import ScheduleList from '../../src_Final/components/ScheduleList';
import { images } from '../../src_Final/images';
import IconButton from '../../src_Final/components/IconButton';
import { theme } from '../../src_Final/theme';

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
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <IconButton type = {images.addCategory} />
                    <Text style={{
                        fontSize: 18,
                        color: theme.text,
                        marginTop: 8,
                    }}>Add a category</Text>
                </View>

                {/* Category List */}
                <View>
                    <Text style={textStyles.category}>-- Category 1</Text>
                    {/* Todo Item */}
                    <TaskList />
                </View>
            </ScrollView>
            
            
        </SafeAreaView>
    );
}