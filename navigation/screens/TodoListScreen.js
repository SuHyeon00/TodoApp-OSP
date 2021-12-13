import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View, ScrollView, Dimensions } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import CalendarStrip from 'react-native-calendar-strip';
import ScheduleList from '../../src_Final/components/ScheduleList';
import AddCategory from '../../src_Final/components/AddCategory';
import ShareExample from '../../src_Final/components/ShareExample';
import moment from 'moment';
import { theme } from '../../src_Final/theme';

export default function TodoListScreen({navigation}) {

    let selectedDate = moment().format('YYYY-MM-DD');
    console.log(selectedDate);

    const setSelectedDate = (date) => {
        selectedDate = date.format('YYYY-MM-DD');
    }

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            {/* Calendar */}
            <View style={{ minHeight: 1, minWidth: Dimensions.get('window').width-30, marginTop: 10 }}>
                <CalendarStrip
                    onDateSelected={(date) => setSelectedDate(date)}
                    selectedDate={selectedDate}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: theme.main }}
                    highlightDateNumberStyle={{color: theme.main, fontWeight: 'bold'}}
                    highlightDateNameStyle={{color: theme.main, fontWeight: 'bold'}}
                    style={{height:80, paddingVertical: 10}}
                    calendarColor={'#F2F2F2'}
                    calendarHeaderStyle={{color: theme.text}}
                    dateNumberStyle={{color: theme.Grey}}
                    dateNameStyle={{color: theme.Grey}}
                    iconContainer={{flex: 0.1}}
                />
            </View>

            <ScrollView>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={textStyles.schedule}> Today's Schedule</Text>
                        <ShareExample />
                    </View>
                    {/* Schedule List */}
                    <ScheduleList selectedDate={selectedDate} />
                </View>
            
                <Text style={viewStyles.divisionLine}> </Text>

                {/* Add a Category */}
                <AddCategory selectedDate={selectedDate} />
            </ScrollView>
        </SafeAreaView>
    );
}