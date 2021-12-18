import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DuedateButtonStyle } from "../styles";
import moment from "moment";

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
    for(id in currentItems) {
      if(currentItems[id]['id'] === task.id)
        currentItems[id]['dueDate'] = moment(date).format('YYYY-MM-DD');
    }
    saveTasks(currentItems);
    hideDatePicker();
  };


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