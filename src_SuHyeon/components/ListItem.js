import React from "react";
import { View, Text } from "react-native";
import { images } from "../images";
import { listStyles } from "../styles";
import { theme } from "../theme";
import IconButton from "./IconButton";

const ListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={listStyles.container}>
            <IconButton type={checked ? images.completed : images.uncompleted}
            onPressOut={onToggle(id)} />
            <Text style={[listStyles.text,
                {color: (checked ? theme.done : theme.text)},
                {textDecorationLine: (checked? 'line-through' : 'none')}]}>
                {textValue}</Text>
            <IconButton type={images.update} />
            <IconButton type={images.delete} onPressOut={onRemove(id)} />
        </View>
    )
}

export default ListItem;