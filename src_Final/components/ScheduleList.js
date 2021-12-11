import * as React from 'react';
import { Dimensions, View } from 'react-native';
import Input from './Input';
import Item from './Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const ScheduleList = () => {
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
    }

    return isReady? (
        <View>
            <Input
                placeholder="+ Add a schedule"
                value={newSchedule}
                setNewItem={setNewSchedule}
                items={schedules}
                saveItems={_saveSchedules}
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