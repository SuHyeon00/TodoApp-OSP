import * as React from 'react';
import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Input from '../../src_Final/components/Input';
import Item from './Item';

const ScheduleList = () => {
    const width = Dimensions.get('window').width;

    // Managing Schedule
    const [newSchedule, setNewSchedule] = useState('');
    const [schedules, setSchedules] = useState({});

    return (
        <View>
            <Input 
                value={newSchedule}
                placeholder="+ Add a schedule"
                newItem={newSchedule}
                setNewItem={setNewSchedule}
                items={schedules}
                setItems={setSchedules}
                />

            <View style={{marginBottom: 10}} width={width-20}>
                {Object.values(schedules).reverse().map(item => (
                    <Item key={item.id} item={item} items={schedules}
                        setItems={setSchedules}
                        placeholder="+ Add a schedule" />
                ))}
            </View>
        </View>
    );
}

export default ScheduleList;
