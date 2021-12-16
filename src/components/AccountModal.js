import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Alert, Modal, Pressable, Dimensions, Button } from "react-native";
import { useState } from 'react/cjs/react.development';
import { textStyles, ModalStyles } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';


const AccountModal = ({nickname, setNickname}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isReady, setIsReady] = React.useState(false);

   
    const [emails, setEmails] = React.useState('');
    const [newNickname, setNewNickname] = React.useState('');

    /*email 저장*/
    const _saveEmail = async emails => {
      try {
          await AsyncStorage.setItem('emails' , JSON.stringify(emails));
          setEmails(emails);
      } catch (e) {
          console.error(e);
      }
    };

    /*nickname 저장*/
    const _saveNickname = async nickname => {
      try {
          await AsyncStorage.setItem("nickname" , JSON.stringify(nickname));
          setNickname(nickname);
      } catch (e) {
          console.error(e);
      }
    };

    const _loadData = async () => {
      const loadedEmails = await AsyncStorage.getItem('emails');
      setEmails(JSON.parse(loadedEmails || ''));

      const loadedNickname = await AsyncStorage.getItem('nickname');
      setNewNickname(loadedNickname.split('"')[1] || '');

    };

    
    /* 버튼 누르면저장 */
    const handleConfirm = () => {
      _saveEmail(emails);
      _saveNickname(newNickname);
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
        <Text style={ModalStyles.modalText}>Account Settings</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{
                fontSize:17,
                marginTop: 17,
                marginLeft: 35,
                fontWeight: "bold",
            }}>Email</Text>
            <TextInput style={ModalStyles.input} 
                      value={emails}
                      onChangeText={(text)=>{setEmails(text);}}
                      placeholder={emails || "Enter your email address"}
                      keyboardType="email-address"
                      maxLength={40}
                      ></TextInput>
        </View>
          <View style={{flexDirection:'row'}}>
              <Text style={{
                  fontSize:17,
                  marginTop: 17,
                  fontWeight: "bold",
              }}>Nickname</Text>
              <TextInput
                  style={ModalStyles.input}
                  value={newNickname}
                  onChangeText={(text)=>{setNewNickname(text);}}
                  placeholder={nickname || "Enter your nickname"}
                  maxLength={40}
              />
          </View>
            <Pressable
              style={[ModalStyles.okbutton, ModalStyles.buttonClose]}
              onPress={handleConfirm}>
              <Text style={ModalStyles.textStyle}>OK</Text>
            </Pressable>
        </View>
      </Modal>

      <Pressable
        style={[ModalStyles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
          <View style={{flexDirection:'row'}}>
            <Image style={{ width: 30, height: 30, marginLeft: 15, marginRight:20, marginTop: 30,}} source={images.setting}/>
            <TouchableOpacity><Text style={textStyles.title}>Account Settings</Text></TouchableOpacity>
        </View>
       
      </Pressable>
        
    </SafeAreaView>
  ) : (
        <AppLoading
        startAsync={_loadData} // //동작하는 동안 실행될 함수
        onFinish={() => setIsReady(true)}   //완료되면 실행할 함수
        onError={console.error} />  //오류 발생시 실행할 함수
  );
};

export default AccountModal;
