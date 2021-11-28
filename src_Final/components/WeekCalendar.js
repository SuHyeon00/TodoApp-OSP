/*
import * as React from 'react';
import { View, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { theme } from '../theme';

const WeekCalendar = () => {

    return (
        <View style={{ minHeight: 1, minWidth: Dimensions.get('window').width-30, marginTop: 10 }}>
            <CalendarStrip
                showWeekNumber
                selectedDate={this.state.selectedDate}
                onPressDate={(date) => {
                    this.setState({ selectedDate: date });
                }}
                onPressGoToday={(today) => {
                    this.setState({ selectedDate: today });
                }}
                onSwipeDown={() => {
                    alert('onSwipeDown');
                }}
                markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
                weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
            />
        </View>
    );
}

export default WeekCalendar;
*/

import * as React from 'react';
import { View, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { theme } from '../theme';

const CalendarWeek = () => {

    return (
        <View style={{ minHeight: 1, minWidth: Dimensions.get('window').width-30, marginTop: 10 }}>
            <CalendarStrip
            scrollable
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
    );
}

export default CalendarWeek;