import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../src_Final/images';
import { textStyles, viewStyles } from '../../src_Final/styles';
import TimeSetting from '../../src_Final/components/TimeSetting';
import AccountModal from '../../src_Final/components/AccountModal';
import RewardsModal from '../../src_Final/components/RewardsModal';

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