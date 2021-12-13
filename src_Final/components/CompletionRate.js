import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles';
import { theme } from '../theme';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import Item from './Item';
import TaskList from './TaskList';

const CompletionRate = ({ tasks }) => {
    const width = Dimensions.get('window').width;

    const [viewRate, setViewRate] = useState(false);

    const [rate, setRate] = useState();

    /* const currentItems = Object.assign({}, tasks);
    const completion = Object.assign({}, tasks).filter((items) => {
        if(items.completed === true){
            return items;
        }
    });

    const percent = (completion.length / currentItems.length*100).toFixed(2); */
    
    const todo = Object.values(tasks);

    useEffect(()=> {
        const completion = todo.filter((tasks) => tasks.completed).length;
        const total = todo.length;

        const percent = total ? (completion / total).toFixed(2)*100 : 0;
        
        setRate(percent);
    }, [todo]);

    /* const taskitems = TaskList(tasks);

    const completedTasks = Object.values(tasks).reverse().filter((filterItem) => {
        if(filterItem.completed === true){
            return filterItem;
        };
    });

    const totalTasks = Object.values(tasks);

    const rate = (completedTasks.length / totalTasks.length).toFixed(2)*100; */
   
    /* let { tasks } = useContext(TaskList);
    const [rate, setRate] = useState({
        percent: 0,
        str: '',
    });

    useEffect(() => {
        if(!todo) return;

        const completion = todo.filter((tasks) => tasks.completed).length;
        const total = todo.length;

        console.log(completion);

        const percent = total ? (completion / total).toFixed(2)*100 : 0;
        const str = `${completion}/${total}`;
        
        setRate({ percent, str });
    }, [todo]); */

    /* const _checkedCount = id => {
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
    }; */

    return(
        <View>
            {/* <Text>{rate.percent}%</Text>
            <Text>{rate.str}</Text> */}
            <Progress.Bar 
                //progress = {Number(_checkedCount)}
                progress = {rate}
                //progress = {0.3}
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
    tasks: PropTypes.object.isRequired
}; */

export default CompletionRate;