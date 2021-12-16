import React, {useState} from 'react';
import {View, Button, Platform, Image, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { images } from '../../src/images';
import { textStyles, viewStyles } from '../../src/styles';
import { TouchableOpacity } from "react-native-gesture-handler";

export const TimeSetting = () => {
  
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleConfirm = (time) =>{
    let tempDate = new Date(currentDate);
    time = tempDate.getTime;

    setTime(time);
    setShow(false);
  };

  return (
   
    <View>
        <View style={{flexDirection: 'row', marginTop: 40}}>
            <Image style={{ width: 30, height: 30, marginLeft: 15, marginRight:20, marginTop: 30,}} source={images.clock}/>
            <TouchableOpacity onPress={showTimepicker}><Text style={textStyles.title}>Time Settings</Text></TouchableOpacity>
        </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          time={time}
          value={date}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChange}
          onConfirm={handleConfirm}
        />
      )}
    </View>
  );
};

export default TimeSetting;