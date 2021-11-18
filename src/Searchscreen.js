import React from 'react';
import { Text, SafeAreaView, View} from 'react-native';
import {viewStyles, textStyles} from './styles';
import IconButton from './components/IconButton';
import { images } from './images';
import Inputname from './components/Inputname';

const Searchsreen = () => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: "#ffffff",
            alignItems: 'baseline',
            justifyContent: 'center',
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
            <Inputname />
            <IconButton type = {images.Searchbutton}/>
            </View>

        <View style={{
            flexDirection: 'row',
        }}
        >
        <IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>Cindyy77</Text>
        <IconButton type = {images.addcircle}/>
        </View>

        <View style={{
            flexDirection: 'row',
        }}
        >
        <IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>CCCindy</Text>
        <IconButton type = {images.addcircle}/>
        </View>

        <View style={{
            flexDirection: 'row',
        }}
        >
        <IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>CindyKim</Text>
        <IconButton type = {images.addcircle}/>
        </View>

        <View style={{
            marginStart:10,
            marginTop: 100,
        }}>
        <IconButton type = {images.backbutton}/>   
        </View>

        </SafeAreaView>

    );

};

export default Searchsreen;