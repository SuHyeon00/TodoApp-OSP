import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import Input from "./Input";
import { taskStyle } from "../styles";

const Schedule = ({ item, deleteSchedule, toggleSchedule, updateSchedule }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);
    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };
    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedSchedule = Object.assign({}, item, {text});
            setIsEditing(false);
            updateSchedule(editedSchedule);
        }
    };
    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };

    return isEditing ? (
        <Input value={text} onChangeText={text => setText(text)}
        onSubmitEditing={_onSubmitEditing}
        onBlur={_onBlur}/>
    ) : (
        <View style={taskStyle.container}>
            <IconButton type = {item.completed ? images.completed : images.uncompleted}
                id = {item.id}
                onPressOut = {toggleSchedule}
                completed = {item.completed} />
            <Text style ={[taskStyle.contents,
                {color: (item.completed ? theme.done : theme.text)},
                {textDecorationLine: (item.completed ? 'line-through' : 'none')}]}>
            {item.text}</Text>
            {item.completed || (<IconButton type={images.update}
            onPressOut={_handleUpdateButtonPress}/>)}

            <IconButton type={images.delete} id={item.id} onPressOut={deleteSchedule} />
        </View>
    )
}

Schedule.propTypes = {
    item: PropTypes.object.isRequired,
    deleteSchedule: PropTypes.func.isRequired,
};

export default Schedule;