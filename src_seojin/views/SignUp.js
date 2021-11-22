import React, { useState } from 'react';
import { Text, View /*, InlineImage */} from 'react-native';
import { images } from '../images';
import { viewStyles, textStyles, inputStyles } from '../styles';
import Input from '../components/Input';
import BoxButton from '../components/BoxButton';
import { theme } from '../theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';

export default function SignUp() {

    const [email, setEmail] = useState({ value: '', error: '' });
    const [name, setName] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _signUp = () => {
        
        const emailError = emailValidator(email.value);
        const nameError = nameValidator(name.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        
        /*
        navigation.reset({
            routes: [{ name: 'SignUp' }],
        })
        */
    };

    return(
        <View style = {viewStyles.signup}>
            <Text style = {textStyles.logo}>Register</Text>
            <Text style = {textStyles.contents}>Email</Text>
            <Input
                underlineColor = {theme.text}
                placeholder = "Email address"
                placeholderTextcolor = {theme.text}
                value = {email.value}
                onChangeText = {(text) => setEmail({ value: text, error: '' })}
                textContentType = "emailAddress"
                keyboardType = "email-address"
                //onSubmitEditing = {() => this.name.focus()}
            /* >
                <InlineImage source = {images.profile} size = {20}/>
            </Input> */
            />
            <Text style = {textStyles.contents}>Nickname</Text>
            <Input
                underlineColor = {theme.text}
                placeholder = "Nickname"
                placeholderTextcolor = {theme.text}
                value = {name.value}
                onChangeText = {(text) => setName({ value: text, error: '' })}
                //onSubmitEditing = {() => this.password.focus()}
            /* >
                <InlineImage source = {images.nickname} size = {20}/>
            </Input> */
            />
            <Text style = {textStyles.contents}>Password</Text>
            <Input
                underlineColor = {theme.text}
                placeholder = "Password"
                placeholderTextcolor = {theme.text}
                value = {password.value}
                onChangeText = {(text) => setPassword({ value: text, error: '' })}
                secureTextEntry = {true}
            /* >
                <InlineImage source = {images.password} size = {20}/>
            </Input> */
            />
            <BoxButton /*onPress = {() => navigation.replace('Login')}*/ title = "Back" />
            <BoxButton onPress = {_signUp} title = "Confirm" />
            
        </View>
    )
}

//export default Signup;