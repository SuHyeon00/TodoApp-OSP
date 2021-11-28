import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import Input from "./Input";
import { categoryStyle, taskStyle, textStyles } from "../styles";
import TaskList from "./TaskList";

const Category = ({ item, deleteCategory, updateCategory, setNewCategory, setCategories }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);
    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };
    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedCategory = Object.assign({}, item, {text});
            setIsEditing(false);
            updateCategory(editedCategory);
        }
    };
    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };

    return isEditing ? (
        <Input value={text} placeholder="+ Add a Category"
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}
            setNewItem={setNewCategory}
            setItems={setCategories}/>
    ) : (
        <View>
            <View style={categoryStyle.container}>
                <Text style ={textStyles.category}>-- {item.text}</Text>
                <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>
                <IconButton type={images.delete} id={item.id} onPressOut={deleteCategory} /> 
            </View>

            <TaskList />

        </View>
    )
}

Category.propTypes = {
    item: PropTypes.object.isRequired,
    deleteCategory: PropTypes.func.isRequired,
};

export default Category;
