import * as React from 'react';
import { images } from '../images';
import IconButton from './IconButton';
import {StyleSheet,TextInput, View, Dimensions, Text, Image} from "react-native";


const Email = () => {

    const [newEmail, setNewEmail] = React.useState("Whayeon@ewhain.net");

    const _updateEmail = email => {   
        const currentEmail = Object.assign({}, emails);
        currentEmail[email.id] = email;
        setEmails(currentEmail);
    };
  
    const _handleEmailChange = text =>{
        setNewEmail(text);
    };


    return (
        <View style={{flexDirection:'row'}}>
            <Text style={{
                fontSize:17,
                marginTop: 17,
                fontWeight: "bold",
                marginRight: 35,
                marginLeft: 10,
            }}>Email</Text>
            <TextInput style={styles.input} onChangeText={_handleEmailChange} value={newEmail} keyboardType="email-address" placeholder={newEmail}>
            </TextInput>
            <IconButton type={images.update}/>
        </View>

    );
};

const styles = StyleSheet.create({
    input: {
      width: 260,
      height: 40,
      margin: 8,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
    },
  });

export default Email;