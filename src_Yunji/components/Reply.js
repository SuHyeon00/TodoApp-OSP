import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';

const Reply = () => {
    const [text, setText] = useState('');
    const _onChangetext = text => setText(text);

    return(
        <View style={{
            paddingStart:30,
        }}>
            
            <TextInput style= {{
                borderWidth: 1,
                padding: 5,
                fontSize: 20,
            }}
            placeholder="Add a text"
            onChangeText={_onChangetext}/>
        </View>
    );
};

export default Reply;