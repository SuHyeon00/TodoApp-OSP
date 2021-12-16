import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../src/images';
import { textStyles, viewStyles } from '../../src/styles';
import TimeSetting from '../../src/components/TimeSetting';
import AccountModal from '../../src/components/AccountModal';
import RewardsModal from '../../src/components/RewardsModal';

export default function SettingsScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={viewStyles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{ width: 80, height: 80, marginLeft: 5, marginRight:20, marginTop: 20,}} source={images.profile}/>
                    <Text style={textStyles.account}>ME</Text>
                </View>

                <AccountModal/>

                <TimeSetting/>

                <RewardsModal/>


            </View>

        </View>
    );
}