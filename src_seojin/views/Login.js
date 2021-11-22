import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { viewStyles, textStyles, inputStyles } from '../styles';
import Input from '../components/Input';
import BoxButton from '../components/BoxButton';
import { theme } from '../theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';

export default function Login (){

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _login = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if(emailError || passwordError){
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        
        /*
        navigation.reset({
            routes: [{ name: 'Login' }],
        })
        */
    };

   
    return(
        <View style = {viewStyles.login}>
            <Text style = {textStyles.logo}>To-do list</Text>
            <Text style = {textStyles.contents}>Email</Text>
            <Input
                underlineColor = {theme.text}
                placeholder = "Add a text"
                placeholderTextcolor = {theme.text}
                value = {email.value}
                onChangeText = {(text) => setEmail({ value: text, error: '' })}
                textContentType = "emailAddress"
                keyboardType = "email-address"
                //onSubmitEditing = {() => this.password.focus()}
            />
            <Text style = {textStyles.contents}>Password</Text>
            <Input
                underlineColor = {theme.text}
                placeholder = "Add a text"
                placeholderTextcolor = {theme.text}
                value = {password.value}
                onChangeText = {(text) => setPassword({ value: text, error: '' })}
                secureTextEntry = {true}
            />

            <BoxButton onPress = {_login} title = "Sign In" />
            <BoxButton title = "Sign Up" />            
            
        </View>
    );
    
    

};

/*
<BoxButton onPress = {() => navigation.replace('SignUp')}>Sign up</BoxButton>
*/