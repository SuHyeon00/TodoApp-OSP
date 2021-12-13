import React, {useState} from 'react';
import {View, Button, Platform, Image, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { images } from '../../src_Final/images';
import { textStyles, viewStyles } from '../../src_Final/styles';
import { TouchableOpacity } from "react-native-gesture-handler";

export const TimeSetting = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
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
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimeSetting;
