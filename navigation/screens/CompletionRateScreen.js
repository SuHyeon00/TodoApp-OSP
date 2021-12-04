import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CompletionRate from '../../src_Final/components/CompletionRate';
import { textStyles, viewStyles } from '../../src_Final/styles';

export default function CompletionRateScreen({navigation}) {
    return (
        <View style={viewStyles.container}>
            <Text style={textStyles.title}>- Today’s completion rate</Text>
            <CompletionRate />
            
            <Text style={textStyles.title}>-- Weekly completion rate</Text>
            <CompletionRate />

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={textStyles.title}>REWARD</Text>
            </View>
        </View>
    );
}