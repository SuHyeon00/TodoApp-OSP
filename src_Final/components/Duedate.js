import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ThemeProvider } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DuedateButtonStyle } from "../styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Duedate = () => {
  
  const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const _saveDuedate = async date => {
    try{
      await AsyncStorage.setDate('date',JSON.stringify(date));
      setDate(date);
    }catch(e){
      console.error(e);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);  //내가추가
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={DuedateButtonStyle.button}><Text style={DuedateButtonStyle.text}>DUE DATE</Text>
        </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={date}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Duedate;