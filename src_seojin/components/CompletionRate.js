import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles';
import { theme } from '../theme';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import Item from './Item';

const CompletionRate = ({ /* _checkedCount */ items }) => {
    const width = Dimensions.get('window').width;

    const _checkedCount = id => {
        const currentItems = Object.assign({}, items);
        var arr = new Array();
        for(var i=0;i<arr.length;i++){
            arr[i]=currentItems[id];
        };
        let count = 0;
        let ratio = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]['completed'] === true) {
                count++;
            }
        }

        if (arr.length === 0) {
        ratio = 0;
        } else if (arr.length > 0) {
        ratio = count / arr.length;
        } else {
        ratio = 0;
        }

        //console.log(Number(ratio.toFixed(2)));
        return Number(ratio.toFixed(2));
    };

    return(
        <View>
            <Progress.Bar 
                //progress = {Number(_checkedCount)}
                progress = {0.3}
                width = {width-30}
                height = {30}
                animated = {true}
                color = {theme.Green}
                unfilledcolor = {theme.itemBackground}
                borderWidth = {1}
                borderColor = {theme.Green}
            />

        </View>
    )
}

/* CompletionRate.propTypes = {
    //_checkedCount: PropTypes.func.isRequired
    items: PropTypes.object.isRequired
}; */

export default CompletionRate;