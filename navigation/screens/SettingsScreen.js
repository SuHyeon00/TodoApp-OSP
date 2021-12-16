import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../src/images';
import { textStyles, viewStyles } from '../../src/styles';
import TimeSetting from '../../src/components/TimeSetting';
import AccountModal from '../../src/components/AccountModal';
import RewardsModal from '../../src/components/RewardsModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 2071051 Ha YunJi

export default function SettingsScreen({navigation}) {

    const [nickname, setNickname] = React.useState('USER');

    const loadNick = React.useMemo(async () => {
        const loadedNicknames = await AsyncStorage.getItem('nicknames');
        setNickname(loadedNicknames);
        console.log(loadedNicknames);
    });

    console.log(nickname);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={viewStyles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{ width: 70, height: 70, marginLeft: 5, marginRight:20, marginTop: 20, }} source={images.profile}/>
                    <Text style={textStyles.account}>{nickname.split('"')[1]}</Text>
                </View>

                <AccountModal/>

                <TimeSetting/>

                <RewardsModal/>


            </View>

        </View>
    );
}
