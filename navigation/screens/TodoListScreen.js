import * as React from 'react';
import { StatusBar, SafeAreaView, Text, View, ScrollView, Dimensions } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../../src_Final/styles';
import CalendarStrip from 'react-native-calendar-strip';
import ScheduleList from '../../src_Final/components/ScheduleList';
import AddCategory from '../../src_Final/components/AddCategory';
import ShareExample from '../../src_Final/components/ShareExample';
import moment from 'moment';
import { theme } from '../../src_Final/theme';

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
            {/* Calendar*/}

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