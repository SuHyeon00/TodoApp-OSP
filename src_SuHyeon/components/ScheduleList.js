import React from "react";
import { StyleSheet, ScrollView, Text, Dimensions } from "react-native";
import ListItem from "./ListItem";

const ScheduleList = ({schedules, onRemove, onToggle}) => {
    return (
        <ScrollView width={Dimensions.get('window').width}>
            {schedules.map(schedule => (
                <ListItem key={schedule.id} {...schedule}
                onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default ScheduleList;