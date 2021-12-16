import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../src/images';
import { textStyles, viewStyles } from '../../src/styles';
import AccountModal from '../../src/components/AccountModal';
import RewardsModal from '../../src/components/RewardsModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimeModal from '../../src/components/TimeModal';
import AppLoading from 'expo-app-loading';

// 2071051 Ha YunJi

export default function SettingsScreen({navigation}) {

    const [nickname, setNickname] = React.useState('USER');
    const [isReady, setIsReady] = React.useState(false);

    const _loadData = async () => {
        const loadedNickname = await AsyncStorage.getItem('nickname');
        setNickname( (loadedNickname === null) ? 'USER' : loadedNickname.split('"')[1]);
    };

    return isReady? (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={viewStyles.container}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Image style={{ width: 70, height: 70, marginLeft: 5, marginRight:20, marginTop: 20, }} source={images.profile}/>
                    <Text style={textStyles.account}>{nickname}</Text>
                </View>

                <AccountModal nickname={nickname} setNickname={setNickname}/>

                <TimeModal/>

                <RewardsModal/>

                <Image style={{ width: 240, height: 150, marginVertical: 40, marginHorizontal: 64, }} source={images.Gro}/>
            </View>


        </View>
    ) : (
        <AppLoading
        startAsync={_loadData} // //동작하는 동안 실행될 함수
        onFinish={() => setIsReady(true)}   //완료되면 실행할 함수
        onError={console.error} />  //오류 발생시 실행할 함수
  );
}
