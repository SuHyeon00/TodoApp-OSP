import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import IconButton from "./IconButton";
import { images } from "../images";
import { theme } from "../theme";
import { ThemeProvider } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DuedateButtonStyle } from "../styles";

const Duedate = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={DuedateButtonStyle.button}><Text style={DuedateButtonStyle.text}>DUE DATE</Text>
        </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Duedate;