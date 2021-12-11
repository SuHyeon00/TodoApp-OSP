import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ThemeProvider } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DuedateButtonStyle } from "../styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Duedate = ({ task, tasks, saveTasks }) => {
  
  const [currentDate, setCurrentDate] = useState(new Date(task.dueDate));

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setCurrentDate(date);
    const currentItems = Object.assign({}, tasks);
    currentItems[task.id]['dueDate'] = date.toLocaleDateString();
    saveTasks(currentItems);
    hideDatePicker();
  };

  /*
  const _saveDates = async dates => {
    try {
      await AsyncStorage.setItem('dates', JSON.stringify(dates));
      setDates(dates);
    } catch (e) {
      console.error(e);
    }
  }
  */

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={DuedateButtonStyle.button}>
        <Text style={DuedateButtonStyle.text}>DUE DATE</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={currentDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Duedate;