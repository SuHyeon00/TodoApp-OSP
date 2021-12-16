import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import IconButton from "./IconButton";
import { images } from "../images";
import { inputStyle, taskStyle } from "../styles";
import { TextInput } from "react-native-gesture-handler";
import Duedate from "./Duedate";
import CommentInput from "./CommentInput";
import Picture from './Picture';

// 1928019 Oh SuHyeon 1976086 Kim JeongHyeon

const Item = ({ item, items, saveItems, placeholder }) => {

    const [showCommentVisible, setShowCommentVisible] = useState(false);

    // delete a item 1976086 Kim JeongHyeon


    // check a completed item 2076016 Kwak SeoJin
    
    
    // edit a item 1976086 Kim JeongHyeon


    const _showVisible = () => {
        setShowCommentVisible(!showCommentVisible);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);
    
    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedItem = Object.assign({}, item, {text});
            setIsEditing(false);
            if(text != '')
                _updateItem(editedItem);
            else
                alert("Error!");
        }
    };

    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };

    return isEditing ? (
        <TextInput style={inputStyle.textInput}
            placeholder={placeholder}
            placeholderTextColor= {theme.main}
            maxLength={20}
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}/>
    ) : (
        <View>
            <View style={taskStyle.container}>
                <IconButton type = {item.completed ? images.completed : images.uncompleted}
                    id = {item.id}
                    onPressOut = {_toggleItem}
                    completed = {item.completed} />
                
                <TouchableOpacity style={taskStyle.contents} onPress={_showVisible}>
                    <Text style ={[taskStyle.contents,
                        {color: (item.completed ? theme.done : theme.text)},
                        {textDecorationLine: (item.completed ? 'line-through' : 'none')}]}>
                    {item.text}</Text>
                </TouchableOpacity>

                {placeholder === "+ Add a schedule" || <Duedate task={item} tasks={items} saveTasks={saveItems}/>}
                <Picture />
                {item.completed || (<IconButton type={images.update}
                    onPressOut={_handleUpdateButtonPress}/>)}
                <IconButton type={images.delete} id={item.id} onPressOut={_deleteItem} />
                </View>
                {showCommentVisible ? ( <CommentInput /> ) : null}
                
        </View>
    )
}

export default Item;