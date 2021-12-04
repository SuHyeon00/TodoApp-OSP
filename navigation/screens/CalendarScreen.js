import * as React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../../src_Final/theme';

export default function CalendarScreen({navigation}) {

    const [markedDates, setMarkedDates] = React.useState(null);
    const [dates, setDates] = React.useState(['2021-01-05', '2021-01-20']);

    function addDates() {
        let obj = dates.reduce(
            (c, v) => Object.assign(c, {
                [v]: { marked: true, dotColor: theme.main },
            }),
            {},
        );

        console.log(obj);
        setMarkedDates(obj);
    }

    return (
        <View style={{alignContent: 'center', justifyContent: 'center', marginVertical: 40}}>
            <Calendar
                onDayPress={() => navigation.navigate('Todo List')}
                markedDates={markedDates}
            />
        </View>
    );
}