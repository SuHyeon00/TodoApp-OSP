import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import * as React from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { theme } from '../../src_Final/theme';

export default function CalendarScreen({navigation}) {

    const [markedDates, setMarkedDates] = React.useState({
        [`${moment().format('YYYY-MM-DD')}`] : {selected: true, selectedColor: theme.main}
    });

    React.useEffect(async () => {
        const loadedSchedules = await AsyncStorage.getItem('schedules');
        const schedules = Object.assign({}, JSON.parse(loadedSchedules || '{}'));
        
        const keys = Object.keys(schedules);
        // console.log(keys);

        let dates = [];
    
        for(let i = 0; i < keys.length; i++) {
            dates.push(schedules[keys[i]].dueDate);
        }
        // console.log(dates);
    
        let obj = dates.reduce((c, v) => Object.assign(c, {
            [v]: {marked: true, dotColor: theme.Green},
            }), {},
        );
        // console.log(obj);

        let today = {};
        if(obj[`${moment().format('YYYY-MM-DD')}`] != null) {
            today = {
                [`${moment().format('YYYY-MM-DD')}`] : {selected: true, marked: true, dotColor: theme.Green, selectedColor: theme.main}
            }
        } else {
            today = {
                [`${moment().format('YYYY-MM-DD')}`] : {selected: true, selectedColor: theme.main}
            }
        }
        setMarkedDates({...obj, ...today});
    })

    return (
        <View style={{alignContent: 'center', justifyContent: 'center', margin: 5}}>
            <CalendarList
                style={{
                    borderRadius: 15,
                }}
                onDayPress={(day) => navigation.navigate('Todo List', {
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
                markedDates={markedDates}
                showScrollIndicator={true}
            />
        </View>
    );
}