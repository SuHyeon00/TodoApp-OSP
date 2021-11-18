import React from 'react';
import {Pressable, Text} from 'react-native';
//일단 만들었는데 쓰일진 모르겠음

const FriendsButton = props => {
    return (
        <Pressable
         style = {{
             backgroundColor: "#ffffff",
             padding: 0,
             margin: 30,
             borderRadius:0, 
         }}>
         <Text style={{ color: "#000000", fontSize: 24}}>{props.name}</Text>
        </Pressable>
    );
};

export default FriendsButton;

