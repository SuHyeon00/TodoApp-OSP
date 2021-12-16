import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Alert, Modal, Pressable } from "react-native";
import { useState } from 'react/cjs/react.development';
import { ModalStyles, textStyles } from '../../src_Final/styles';
import { theme } from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';
import RateInput from './RateInput';
import Item from './Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const RewardsModal = () => {
  
    const [modalVisible, setModalVisible] = useState(false);

    const [newRate, setNewRate] = useState('');
    const [rates, setRates] = useState({});

    const [isReady, setIsReady] = React.useState(false);


    const _saveRate = async rates => {
      try {
          await AsyncStorage.setRates('rates', JSON.stringify(rates));
          setRates(rates);
      } catch (e) {
          console.error(e);
      }
    };

    const _loadRates = async () => {
      const loadedRates = await AsyncStorage.getItem('rates');
      setRates(JSON.parse(loadedRates || '{}'));
    }

    const handleConfirm = () => {
      _saveRate(newRate);  //이부분 어떡하지
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
          <Text style={ModalStyles.modalTextTitle}>Rewards Settings</Text>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.texts}>Completion rate</Text>

              <TextInput
                  style={styles.input}
                  onChangeText={setNewRate}
                  value={newRate}
                  setNewRate={setNewRate} //수정
                  saveRate={_saveRate}  //수정필요
                  keyboardType="number-pad"
                  maxLength={3}
              />
                                    
              <Text style={styles.texts}>%</Text>
          </View>

          <Pressable
            style={[ModalStyles.okbutton, ModalStyles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={ModalStyles.textStyle}>OK</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable style={[ModalStyles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <View style={{flexDirection:'row'}}>
          <Image style={{ width: 30, height: 30, marginLeft: 15, marginRight:20, marginTop: 30,}} source={images.star}/>
          <TouchableOpacity><Text style={textStyles.title}>Rewards Settings</Text></TouchableOpacity>
        </View>
      </Pressable>  
    </SafeAreaView>
  ) : (
        <AppLoading
        startAsync={_loadRates} //어떡하지
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

export default RewardsModal;