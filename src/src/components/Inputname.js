import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';

const Inputname = () => {
    const [text, setText] = useState('');
    const _onChangetext = text => setText(text);

    return(
        <View>
            
            <TextInput style= {{
                borderWidth: 1,
                padding: 5,
                fontSize: 20,
                marginBottom: 80,
                marginStart: 10,

            }}
            onChangeText={_onChangetext}/>
        </View>
    );
};

export default Inputname;