import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../theme";
import { images } from "../images";
import { taskStyle } from "../styles";

export default function ListAll({ item }) {

    return (
        <View style={taskStyle.container}>
            {item.completed ? 
            <Image key={Date.now().toString()} style={{ width: 48, height: 30, }} source={images.iconGrey}/> : 
            <Image key={Date.now().toString()} style={{ width: 48, height: 30 }} source={images.icon}/> }
            <Text key={item.id}
                style ={[{
                    fontSize: 25,
                    backgroundColor: theme.itemBackground,
                    marginLeft: 10,
                    marginBottom: 5,},
                    {color: (item.completed ? theme.done : theme.text)},
                    {textDecorationLine: (item.completed ? 'line-through' : 'none')}]}>
            {item.text}</Text>
        </View>
    )
}