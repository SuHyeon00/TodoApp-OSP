import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { theme } from '../../src_Final/theme';

export default function CalendarScreen({navigation}) {

    const [isReady, setIsReady] = React.useState(false);

    const [schedules, setSchedules] = React.useState({});
    const [dates, setDates] = React.useState([]);

    const _loadSchedules = async () => {
        const loadedSchedules = await AsyncStorage.getItem('schedules');
        setSchedules(JSON.parse(loadedSchedules || '{}'));
        for(const id in schedules) {
            const day = new Date(id);
            const markedDate = day.getFullYear() + "-" + (day.getMonth()+1) + "-" + day.getDate();
            console.log(markedDate);
        }
        
    }

    return isReady? (
        <View style={{alignContent: 'center', justifyContent: 'center', marginVertical: 5}}>
            <CalendarList
                onDayLongPress={(day) => navigation.navigate('Todo List', {
                    // params 전달
                    /* day Object
                    {
                        day: 1,      // day of month (1-31)
                        month: 1,    // month of year (1-12)
                        year: 2017,  // year
                        timestamp,   // UTC timestamp representing 00:00 AM of this date
                        dateString: '2016-05-13' // date formatted as 'YYYY-MM-DD' string
                    }
                    */
                    checkedDate: day})
                }
                markedDates={{
                    'Date.now()' : {selected: true, marked: true, selectedColor: theme.main},
                    '2021-12-17': {marked: true},
                    '2021-12-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2021-12-19': {disabled: true, disableTouchEvent: true}
                }}
            />
        </View>
    ) : (
        <AppLoading
        startAsync={_loadSchedules}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
}