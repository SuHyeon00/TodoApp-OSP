import * as React from 'react';
import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Input from '../../src_Final/components/Input';
import Schedule from '../../src_Final/components/Schedule';

const ScheduleList = () => {

    const width = Dimensions.get('window').width;

    // Managing Schedule
    const [newSchedule, setNewSchedule] = useState('');
    const [schedules, setSchedules] = useState({});
    // add a schedule
    const _addSchedule = () => {
        const ID = Date.now().toString();
        const newScheduleObject = {
            [ID]: {id: ID, text: newSchedule, completed: false},
        };
        setNewSchedule('');
        setSchedules({...schedules, ...newScheduleObject});
    };
    // delete a schedule
    const _deleteSchedule = id => {
        const currentSchedules = Object.assign({}, schedules);
        delete currentSchedules[id];
        setSchedules(currentSchedules);
    };
    // check a completed schedule
    const _toggleSchedule = id => {
        const currentSchedules = Object.assign({}, schedules);
        currentSchedules[id]['completed'] = !currentSchedules[id]['completed'];
        setSchedules(currentSchedules);
    };
    // edit a schedule
    const _updateSchedule = item => {
        const currentSchedules = Object.assign({}, schedules);
        currentSchedules[item.id] = item;
        setSchedules(currentSchedules);
    };

    const _handleTextChangeSchedule = text => {
        setNewSchedule(text);
    };

    return (
        <View>
            <Input value={newSchedule} placeholder="+ Add a schedule"
                onChangeText={_handleTextChangeSchedule} 
                onSubmitEditing={_addSchedule}/>
            <View style={{marginBottom: 10}} width={width-20}>
                {Object.values(schedules).reverse().map(item => (
                    <Schedule key={item.id} item={item}
                        deleteSchedule={_deleteSchedule} toggleSchedule={_toggleSchedule}
                        updateSchedule={_updateSchedule} />
                ))}
            </View>
        </View>
    );
}

export default ScheduleList;
