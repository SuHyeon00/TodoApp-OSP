import React from 'react';
import { Text, SafeAreaView, View} from 'react-native';
import {viewStyles, textStyles} from './styles';
import IconButton from './components/IconButton';
import { images } from './images';

const Friends = () => {
    return (
        /*
        <View style={{
            flex:1,
            backgroundColor: "#ffffff",
            alignItems: 'baseline',
            justifyContent: 'center',
        }}
        >
        */
      <SafeAreaView style={viewStyles.container}>
      
        
        <Text style={textStyles.semititle}>FriendsList</Text>
        <IconButton type = {images.addfriends}/>
        

        <View style={{
            flexDirection: 'row',
            marginStart: 20,
            marginTop: 20,
        }}
        >
        <IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>Whayeon</Text>
        <IconButton type = {images.edits}/>
        </View>
         
        <View style={{
            flexDirection: 'row',
            marginStart: 20,
            marginTop: 20,
        }}
        ><IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>Emily</Text>
        <IconButton type = {images.edits}/> 
        </View>
        
        <View style={{
            flexDirection: 'row',
            marginStart: 20,
            marginTop: 20,
        }}
        ><IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>Amy</Text>
        <IconButton type = {images.edits}/> 
        </View>
        
        <View style={{
            flexDirection: 'row',
            marginStart: 20,
            marginTop: 20,
        }}
        ><IconButton type = {images.account}/> 
        <Text style={textStyles.friendsaccount}>Lilly</Text>
        <IconButton type = {images.edits}/> 
        </View>


        </SafeAreaView>
    );
};

export default Friends;