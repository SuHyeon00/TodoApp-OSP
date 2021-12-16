import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View, ScrollView, Dimensions } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src/styles';
import CalendarStrip from 'react-native-calendar-strip';
import ScheduleList from '../../src/components/ScheduleList';
import AddCategory from '../../src/components/AddCategory';
import ShareExample from '../../src/components/ShareExample';
import moment from 'moment';
import { theme } from '../../src/theme';

// 1976086 Kim JeongHyeon 1928019 Oh SuHyeon

export default function TodoListScreen({route, navigation}) {
    // 1928019 Oh SuHyeon
    const [selectedDate, setSelectedDate] = React.useState(moment().format('YYYY-MM-DD'));
    const calendarDate = React.useEffect(() => (route.params != undefined) ? setSelectedDate(JSON.stringify(route.params).split('"')[3])
                                                : setSelectedDate(selectedDate), [route.params]);
    console.log(selectedDate);

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar style={barStyles.statusbar} />
            {/* Calendar 1976086 Kim JeongHyeon */}
            <View style={{ minHeight: 1, minWidth: Dimensions.get('window').width-30, marginTop: 10 }}>
                <CalendarStrip
                    onDateSelected={(date) => setSelectedDate(date.format('YYYY-MM-DD'))}
                    scrollable={true}
                    scrollerPaging={true}
                    selectedDate={selectedDate}
                    daySelectionAnimation={{type: 'border', borderWidth: 1, borderHighlightColor: theme.main }}
                    highlightDateNumberStyle={{color: theme.main, fontWeight: 'bold'}}
                    highlightDateNameStyle={{color: theme.main, fontWeight: 'bold'}}
                    style={{height:80, paddingVertical: 10}}
                    calendarColor={'#F2F2F2'}
                    calendarHeaderStyle={{color: theme.text, }}
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
