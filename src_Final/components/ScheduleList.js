import * as React from 'react';
import { Dimensions, View } from 'react-native';
import Input from './Input';
import Item from './Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { isFriday } from 'date-fns';

const ScheduleList = (selectedDate) => {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = React.useState(false);

    // Managing Schedule
    const [newSchedule, setNewSchedule] = React.useState('');
    const [schedules, setSchedules] = React.useState({});

    const _saveSchedules = async schedules => {
        try {
            await AsyncStorage.setItem('schedules', JSON.stringify(schedules));
            setSchedules(schedules);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadSchedules = async () => {
        const loadedSchedules = await AsyncStorage.getItem('schedules');
        setSchedules(JSON.parse(loadedSchedules || '{}'));
    };
/*
        // 스케줄에 있는 객체들 하나씩 접근해서 걔의 date가 selectedDate와 같은지 비교하고 같은 애들만 selectedSchedules에 저장
        const tmp = Object.assign({}, schedules);
        for(const id in tmp) {
            if(tmp[id]['date'] != selectedDate) {
                delete tmp[id];
            }
        }
        setSelectedSchedules(tmp);
        */

    return isReady? (
        <View>
            <Input
                placeholder="+ Add a schedule"
                value={newSchedule}
                setNewItem={setNewSchedule}
                items={schedules}
                saveItems={_saveSchedules}
                selectedDate={selectedDate}
                />

            <View style={{marginBottom: 10}} width={width-20}>
                {Object.values(schedules).reverse().map(item => (
                    <Item key={item.id} item={item} 
                        items={schedules}
                        saveItems={_saveSchedules}
                        placeholder="+ Add a schedule" />
                ))}
            </View>
        </View>
    ) : (
        <AppLoading
        startAsync={_loadSchedules}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
}

export default ScheduleList;