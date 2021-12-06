import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import IconButton from './IconButton';
import { images } from '../images';
import { theme } from '../theme';
import ModalEx from './ModalEx';
import BoxButton from './BoxButton';

const Picture = ({}) => {

    const [viewModal, setViewModal] = useState(false);

    const openModal = () => {
        setViewModal(true);
    };

    const [pickedImagePath, setPickedImagePath] = useState('');

    const showImagePicker = async() => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if(!result.cancelled) {
            setPickedImagePath(result.uri);
            setViewModal(false);
        }
    };

    

    const openCamera = async() => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        if(!result.cancelled) {
            setPickedImagePath(result.uri);
            setViewModal(false);
        }
    };

    return(
        <View>
            <ModalEx viewModal = {viewModal} setViewModal = {setViewModal}>
                <View style = {{
                    justifyContent: 'center',
                }}>
                    { pickedImagePath !== '' && (
                        <BoxButton label = "Remove Current Photo"
                            onPress = {() => {
                            setViewModal(false);
                            setPickedImagePath("");
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
            { pickedImagePath !== '' ? (
                <Image source = {{ uri: pickedImagePath }} style = {styles.picture} />
            ) : (
                <IconButton type = {images.picture} onPressOut = {openModal} />
            )}
            </Pressable>
        </View>
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