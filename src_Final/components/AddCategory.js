import * as React from 'react';
import { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { images } from '../images';
import { theme } from '../theme';
import Category from './Category';
import IconButton from './IconButton';

const AddCategory = () => {
    const width = Dimensions.get('window').width;

    // Managing Category
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState({});

    // add a Category
    const _addCategory = () => {
        const ID = Date.now().toString();
        const newCategoryObject = {
            [ID]: {id: ID, text:newCategory}
        };
        setNewCategory('');
        setCategories({...categories, ...newCategoryObject});
    };

    // delete a task
    const _deleteCategory = id => {
        const currentCategories = Object.assign({}, categories);
        delete currentCategories[id];
        setCategories(currentCategories);
    };

    // edit a Category
    const _updateCategory = item => {
        const currentCategories = Object.assign({}, categories);
        currentCategories[item.id] = item;
        setCategories(currentCategories);
    };

    const _onBlur = () => {
        setNewCategory('');
    };

    const _handleTextChangeCategory = text => {
        setNewCategory(text);
    };

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <IconButton type = {images.addCategory} />
                <TextInput
                    value={newCategory} 
                    placeholder="+ Add a Category"
                    placeholderTextColor= {theme.main}
                    onChangeText={_handleTextChangeCategory} 
                    onSubmitEditing={_addCategory}
                    onBlur={_onBlur}>
                </TextInput>

            </View>

            <View width={width-20}>
                {Object.values(categories).reverse().map(item => (
                    <Category 
                        item={item}
                        deleteCategory={_deleteCategory}
                        updateCategory={_updateCategory}/>
                ))}
            </View>
        </View> 
    );
}

export default AddCategory;
