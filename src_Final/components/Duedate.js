import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import { duedateStyle, inputStyle } from "../styles";  


const Duedate = ({ duedate, updateDuedate }) => { 
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(duedate.text); 

    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };
    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedDuedate = Object.assign({}, duedate, {text}); 
            setIsEditing(false);
            updateDuedate(editedDuedate);
        }
    };
    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(duedate.text); 
        }
    };

    return isEditing ? (
        <TextInput style={inputStyle.duedateInput}
            placeholder="+ Set a duedate"
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}/>
    ) : (
        <View>
            <View style={duedateStyle.container}>
                <Text style ={duedateStyle.contents}>{duedate.text}</Text>
                <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>
            </View>

        </View>
    )
}

Duedate.propTypes = {
    duedate: PropTypes.object.isRequired,  
};

export default Duedate;