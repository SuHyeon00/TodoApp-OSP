import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Alert, Modal, Pressable } from "react-native";
import { useState } from 'react/cjs/react.development';
import { textStyles, ModalStyles } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const TimeModal = () => {
  
    const [modalVisible, setModalVisible] = useState(false);
    const [isReady, setIsReady] = React.useState(false);

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = React.useState('');

    /*reward rate 저장*/
    const _saveHour = async hours => {
      try {
          await AsyncStorage.setItem('hours', JSON.stringify(hours));
          setHours(hours);
      } catch (e) {
          console.error(e);
      }
    };

    const _saveMinutes = async minutes => {
        try {
            await AsyncStorage.setItem('minutes', JSON.stringify(minutes));
            setMinutes(minutes);
        } catch (e) {
            console.error(e);
        }
      };

    const _loadData = async () => {
        const loadedHours = await AsyncStorage.getItem('hours');
        setHours(loadedHours.split('"')[1] || '');
  
        const loadedMinutes = await AsyncStorage.getItem('minutes');
        setMinutes(loadedMinutes.split('"')[1] || '');
    }

    /* 버튼 누르면 저장*/
    const handleConfirm = () => {
        _saveHour(hours);
        _saveMinutes(minutes);
        setModalVisible(!modalVisible)           
    };

  return isReady? (
    <SafeAreaView style={{marginTop: 40}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={ModalStyles.modalView}>
          <Text style={ModalStyles.modalTextTitle}>Time Settings</Text>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.texts}>Hour:</Text>

              <TextInput
                  style={styles.input}
                  value={hours}
                  onChangeText={(value)=>{setHours(value);}}
                  keyboardType="number-pad"
                  maxLength={2}>
                  </TextInput>
              
                                    
              <Text style={styles.texts}>Minute:</Text>

              <TextInput
                  style={styles.input}
                  value={minutes}
                  onChangeText={(value)=>{setMinutes(value);}}
                  keyboardType="number-pad"
                  maxLength={2}>
                  </TextInput>
          </View>

          <Pressable
            style={[ModalStyles.okbutton, ModalStyles.buttonClose]}
            onPress={handleConfirm}>
            <Text style={ModalStyles.textStyle}>OK</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable style={[ModalStyles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <View style={{flexDirection:'row'}}>
          <Image style={{ width: 30, height: 30, marginLeft: 15, marginRight:20, marginTop: 30,}} source={images.clock}/>
          <TouchableOpacity><Text style={textStyles.title}>Time Settings</Text></TouchableOpacity>
        </View>
      </Pressable>  
    </SafeAreaView>
  ) : (
        <AppLoading
        startAsync={_loadData} 
        onFinish={() => setIsReady(true)}
        onError={console.error} />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 45,
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  texts:{
      fontSize:17,
      marginTop: 17,
      fontWeight: "bold",
      marginRight: 5,
      marginLeft: 10,
  }
});

export default TimeModal;
