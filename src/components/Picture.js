import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { images } from '../images';
import { theme } from '../theme';
import ModalEx from './ModalEx';
import BoxButton from './BoxButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

// 2076016 Kwak SeoJin

const Picture = (pictureId) => {
    const [viewModal, setViewModal] = useState(false);
    const [isReady, setIsReady] = React.useState(false);

    const openModal = () => {
        setViewModal(true);
    };

    const [pickedImagePath, setPickedImagePath] = useState(null);

    const _saveImage = async pickedImagePath => {
        try{
            if(pickedImagePath != null) {
                await AsyncStorage.setItem(JSON.stringify(pictureId), pickedImagePath);
                setPickedImagePath(pickedImagePath);
            }
        }
        catch(e){
            console.error(e);
        }
    };

    const _loadImage = async () => {
        const loadedImages = await AsyncStorage.getItem(JSON.stringify(pictureId));
        setPickedImagePath(loadedImages/* JSON.parse(loadedImages || '{}') */);
    };

    const showImagePicker = async() => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();
        
        if(result.uri != null) {
            AsyncStorage.setItem('uri', JSON.stringify(result.uri));
            if(!result.cancelled) {
                _saveImage(result.uri);
                //setPickedImagePath(result.uri);
                setViewModal(false);
            }
        }
    };
  
    const openCamera = async() => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        AsyncStorage.setItem('uri', JSON.stringify(result.uri));
        if(!result.cancelled) {
            _saveImage(result.uri);
            //setPickedImagePath(result.uri);
            setViewModal(false);
        }
    };

    return isReady ? (
        <View>
            <ModalEx viewModal = {viewModal} setViewModal = {setViewModal}>
                <View style = {{
                    justifyContent: 'center',
                }}>
                    { pickedImagePath !== (null) && (
                        <BoxButton style = {{
                            color: theme.main,
                        }}
                            label = "Remove Current Photo"
                            onPress = {() => {
                                setViewModal(false);
                                setPickedImagePath(null);
                        }} />
                    )}
                    <BoxButton label = "Choose from library" 
                        onPress = {showImagePicker} />
                    <BoxButton label = "Take photo"
                        onPress = {openCamera} />
                    <BoxButton label = "Cancel"
                        onPress = {() => {
                            setViewModal(false);
                        }} />
                </View>
            </ModalEx>
            <Pressable onPress = {openModal}>
            { pickedImagePath !== (null) ? (
                <Image source = {{ uri: pickedImagePath }} style = {styles.picture} />
            ) : ( //pickedImagePath === null
                <Image source = {images.picture} style = {styles.picture} />
            )}
            </Pressable>
        </View>
    ) : (
        <AppLoading
        startAsync={_loadImage}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
};

const styles = StyleSheet.create({
    picture: {
        width: 20,
        height: 20,
        margin: 10.
    }
});

export default Picture;