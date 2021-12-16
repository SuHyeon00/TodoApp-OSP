import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../src/images';
import { textStyles, viewStyles } from '../../src/styles';
import AccountModal from '../../src/components/AccountModal';
import RewardsModal from '../../src/components/RewardsModal';
import { useState } from 'react/cjs/react.development';
import TimeModal from '../../src/components/TimeModal';

export default function SettingsScreen({navigation, nicknames}) {
    
    const [text, setText] = useState('');
    const _onChangeText = text => setText(text);
    
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={viewStyles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{ width: 80, height: 80, marginLeft: 5, marginRight:20, marginTop: 20,}} source={images.profile}/>
                    
                </View>

                <AccountModal/>

                <TimeModal/>

                <RewardsModal/>


            </View>

        </View>
    );
}