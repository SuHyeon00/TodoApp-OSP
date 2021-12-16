import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { View, Dimensions } from 'react-native';
import Category from './Category';
import Input from './Input';

// 1928019 Oh SuHyeon

const AddCategory = (selectedDate) => {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = React.useState(false);

    // Managing Category
    const [newCategory, setNewCategory] = React.useState('');
    const [categories, setCategories] = React.useState({});

    const _saveCategories = async categories => {
        try {
            await AsyncStorage.setItem('categories', JSON.stringify(categories));
            setCategories(categories);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadCategories = async () => {
        const loadedCategories = await AsyncStorage.getItem('categories');
        setCategories(JSON.parse(loadedCategories || '{}'));
    }

    return isReady? (
        <View>
            <Input
                placeholder="+ Add a Category"
                value={newCategory}
                setNewItem={setNewCategory}
                items={categories}
                saveItems={_saveCategories}/>

            <View width={width-20}>
                {Object.values(categories).reverse().map(item => (
                    <Category key={item.id} item={item}
                    items={categories}
                    saveItems={_saveCategories}
                    placeholder="+ Add a Category"
                    selectedDate={selectedDate}  />
                ))}
            </View>
        </View> 
    ) : (
        <AppLoading 
        startAsync={_loadCategories}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
}

export default AddCategory;