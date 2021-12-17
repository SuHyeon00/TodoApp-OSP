import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Modal, Pressable } from "react-native";
import { textStyles, ModalStyles } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const RewardsModal = () => {
  
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isReady, setIsReady] = React.useState(false);

    const [rates, setRates] = React.useState('');

    /*reward rate 저장*/
    const _saveRate = async rates => {
      try {
          await AsyncStorage.setItem('rates', JSON.stringify(rates));
          setRates(rates);
      } catch (e) {
          console.error(e);
      }
    };

    const _loadRates = async () => {
      const loadedRates = await AsyncStorage.getItem('rates');
      setRates( (loadedRates === null) ? '' : loadedRates.split('"')[1]);
      console.log(rates);
    }

    /* 버튼 누르면저장*/
    const handleConfirm = () => {
      _saveRate(rates); 
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
                  value={rates}
                  onChangeText={(value)=>{setRates(value);}}
                  keyboardType="number-pad"
                  maxLength={3}>
                  </TextInput>
              
                                    
              <Text style={styles.texts}>%</Text>
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
          <Image style={{ width: 30, height: 30, marginLeft: 15, marginRight:20, marginTop: 30,}} source={images.star}/>
          <TouchableOpacity><Text style={textStyles.title}>Rewards Settings</Text></TouchableOpacity>
        </View>
      </Pressable>  
    </SafeAreaView>
  ) : (
        <AppLoading
        startAsync={_loadRates} 
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