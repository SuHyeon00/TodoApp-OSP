import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Alert, Modal, Pressable } from "react-native";
import { useState } from 'react/cjs/react.development';
import { ModalStyles, textStyles } from '../../src_Final/styles';
import { theme } from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';
import RateInput from './RateInput';


const RewardsModal = () => {
  
    const [modalVisible, setModalVisible] = useState(false);


  return (
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
          <RateInput/>
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
  );
};

export default RewardsModal;