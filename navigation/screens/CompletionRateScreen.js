import * as React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import CompletionRate from '../../src/components/CompletionRate';
import { textStyles, viewStyles } from '../../src/styles';
import Reward from '../../src/components/Reward';

export default function CompletionRateScreen() {
    const width = Dimensions.get('window').width;

    return (
        <ScrollView>
            <View style={viewStyles.container}>
                <Text style={textStyles.title}>- Today’s completion rate</Text>
                    <CompletionRate isToday="Today" />

                <Text style={textStyles.title}>- Weekly completion rate</Text>
                    <CompletionRate isToday="Weekly" />

                <Text style={textStyles.title}>- Monthly completion rate</Text>
                    <CompletionRate isToday="Monthly" />

                <View style={{width: width-20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                    <Reward />
                </View>
            </View>
        </ScrollView>
        
    );
}