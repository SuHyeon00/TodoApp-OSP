import * as React from 'react';
import { View, Text, Image, SafeAreaView, TextInput, Modal, Pressable } from "react-native";
import { useState } from 'react/cjs/react.development';
import { textStyles, ModalStyles } from '../../src_Final/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';


const AccountModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [newEmail, setNewEmail] = React.useState("Whayeon@ewhain.net");
    const [newPassword, setNewPassword] = React.useState();

    const _updateEmail = email => {   
      const currentEmail = Object.assign({}, emails);
      currentEmail[email.id] = email;
      setEmails(currentEmail);
  };

  const _handleEmailChange = text =>{
    setNewEmail(text);
  };

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
        <Text style={ModalStyles.modalText}>Account Settings</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{
                fontSize:17,
                marginTop: 17,
                marginLeft: 35,
                fontWeight: "bold",
            }}>Email</Text>
            <TextInput style={ModalStyles.input} 
                      onChangeText={_handleEmailChange}
                      value={newEmail}
                      keyboardType="email-address"
                      placeholder={newEmail}></TextInput>
        </View>
          <View style={{flexDirection:'row'}}>
              <Text style={{
                  fontSize:17,
                  marginTop: 17,
                  fontWeight: "bold",
              }}>Nickname</Text>
              <TextInput
                  style={ModalStyles.input}
                  onChangeText={setNewPassword}
                  value={newPassword}
                  placeholder="Enter your nickname"
              />
          </View>
            <Pressable
              style={[ModalStyles.okbutton, ModalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
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
  );
};

export default AccountModal;