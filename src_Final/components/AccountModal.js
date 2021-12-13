import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Alert, Modal, Pressable } from "react-native";
import { useState } from 'react/cjs/react.development';
import { textStyles } from '../../src_Final/styles';
import Email from './Email';
import { theme } from '../theme';
import Password from './Password';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';


const AccountModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Account Settings</Text>
            <Email/>
            <Password/>
            <Pressable
              style={[styles.okbutton, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}
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

const styles = StyleSheet.create({
    centeredView: {
      //flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 80,
    },
    modalView: {
    marginTop: 130,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      width: 400,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 15,
      padding: 5,
      elevation: 2,
      alignItems: "flex-end",
    },
    okbutton: {
        borderRadius: 10,
        padding: 5,
        elevation: 2,
        alignItems: "flex-end",
    },

    buttonOpen: {
      backgroundColor: theme.background,
    },
    buttonClose: {
      backgroundColor: theme.lightGreen,
      marginTop: 20,
    },
    textStyle: {
    fontSize:15,
    padding: 3,
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      fontSize: 25,
      fontWeight:"bold",
      color: theme.main,
      marginBottom: 15,
      textAlign: "left",
    }
  });

export default AccountModal;