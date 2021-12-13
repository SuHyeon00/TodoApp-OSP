import * as React from 'react';
import { images } from '../images';
import IconButton from './IconButton';
import {StyleSheet,TextInput, View, Dimensions, Text, Image, Modal, Pressable} from "react-native";


const Password = () => {
    const [newPassword, setNewPassword] = React.useState();

    const _updateEmail = email => {   
        const currentEmail = Object.assign({}, emails);
        currentEmail[email.id] = email;
        setComments(currentEmail);
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
                marginRight: 5,
                marginLeft: 10,
            }}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNewPassword}
                value={newPassword}
                placeholder="******"
                keyboardType="number-pad"
            />
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

export default Password;