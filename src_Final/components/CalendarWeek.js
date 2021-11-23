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