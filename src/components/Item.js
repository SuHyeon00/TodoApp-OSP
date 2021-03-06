import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../theme";
import IconButton from "./IconButton";
import { images } from "../images";
import { inputStyle, taskStyle } from "../styles";
import Duedate from "./Duedate";
import CommentInput from "./CommentInput";
import Picture from './Picture';

// 1928019 Oh SuHyeon 1976086 Kim JeongHyeon 2076016 Kwak SeoJin

const Item = ({ item, items, saveItems, placeholder }) => {

    const [showCommentVisible, setShowCommentVisible] = useState(false);

    // delete a item 1976086 Kim JeongHyeon
    const _deleteItem = key => {
        Alert.alert(
            'Warning',
            'Are you sure to delete?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

              {text: 'OK', onPress: () => {
                const currentItems = Object.assign({}, items);
                for(id in currentItems) {
                    if(currentItems[id]['id'] === key)
                        delete currentItems[id];
                }
                saveItems(currentItems);}
              }
            ]
          );
    };

    // check a completed item 2076016 Kwak SeoJin
    const _toggleItem = key => {
        const currentItems = Object.assign({}, items);
        for(id in currentItems) {
            if(currentItems[id]['id'] === key)
                currentItems[id]['completed'] = !currentItems[id]['completed'];
        }
        saveItems(currentItems);
    };
    
    // edit a item 1976086 Kim JeongHyeon
    const _updateItem = item => {
        const currentItems = Object.assign({}, items);
        for(id in items) {
            if(currentItems[id]['id'] === item.id)
                currentItems[id] = item;
        }
        saveItems(currentItems);
    };

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
                {placeholder === "+ Add a task" ? (<Picture pictureId = {item.id}/>) : (null)}
                {item.completed || (<IconButton type={images.update}
                    onPressOut={_handleUpdateButtonPress}/>)}
                <IconButton type={images.delete} id={item.id} onPressOut={_deleteItem} />
                </View>
                {showCommentVisible ? ( <CommentInput /> ) : null}
                
        </View>
    )
}

export default Item;