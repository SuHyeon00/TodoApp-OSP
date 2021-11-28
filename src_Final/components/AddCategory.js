import * as React from 'react';
import { useState } from 'react';
import { View, Dimensions } from 'react-native';
import Category from './Category';
import Input from './Input';

const AddCategory = () => {
    const width = Dimensions.get('window').width;

    // Managing Category
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState({});

    return (
        <View>
            <Input
                value={newCategory} 
                placeholder="+ Add a Category"
                newItem={newCategory}
                setNewItem={setNewCategory}
                items={categories}
                setItems={setCategories} />

            <View width={width-20}>
                {Object.values(categories).reverse().map(item => (
                    <Category key={item.id} item={item} items={categories}
                    setItems={setCategories}
                    placeholder="+ Add a Category" />
                ))}
            </View>
        </View> 
    );
}

export default AddCategory;