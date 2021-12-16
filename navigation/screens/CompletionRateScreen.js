import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import CompletionRate from '../../src/components/CompletionRate';
import { textStyles, viewStyles } from '../../src/styles';
import Reward from '../../src/components/Reward';

export default function CompletionRateScreen() {
    const width = Dimensions.get('window').width;

    return (
        <View style={viewStyles.container}>
            <Text style={textStyles.title}>- Today’s completion rate</Text>
                <CompletionRate />

            <View style={{width: width-20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <Reward rate = {0.8} />
            </View>
        </View>
    );
}