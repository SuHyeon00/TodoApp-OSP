import * as React from 'react';
import { useState } from 'react';
import { images } from '../images';
import IconButton from './IconButton';
import {TextInput, View, Dimensions} from "react-native";
import { inputStyle } from "../styles";
import {theme} from "../theme";
import Duedate from './Duedate';


const DuedateInput = () => {
    const width = Dimensions.get('window').width;

    const [newDuedate, setNewDuedate] = useState('');
    const [duedates, setDuedates] = useState({});

    // add a duedate
    const _addDuedate = () => {
        const ID = Date.now().toString();
        const newDuedateObject = {
            [ID]: {id: ID, text:newDuedate},
        };
        setNewDuedate('');
        setDuedates({...duedates, ...newDuedateObject});
    };

    /*
    // delete a comment
    const _deleteComment = id => {
        const currentComment = Object.assign({}, comments);
        delete currentComment[id];
        setComments(currentComment);
    };
    */

    // edit a comment
    const _updateDuedate = duedate => {   //item -> comment?
        const currentDuedate = Object.assign({}, duedates);
        currentDuedate[duedate.id] = duedate;
        setDuedates(currentDuedate);
    };

    const _onBlur = () => {
        setNewDuedate('');
    };

    const _handleTextChangeDuedate = text => {
        setNewDuedate(text);
    };
    
   
    return (
        <View>
            <View style={{flexDirection:'row'}}> 
                <TextInput style = {inputStyle.duedateInput}  //바꾸기
                    placeholder="+Set a duedate"
                    placeholderTextColor= {theme.main}
                    value={newDuedate} onChangeText={_handleTextChangeDuedate} onSubmitEditing={_addDuedate} onBlur={_onBlur}>
                </TextInput>
            </View>

            <View>
                {Object.values(duedates).reverse().map(duedate => (
                    <Duedate key={duedate.id} duedate={duedate}
                    updateDuedate={_updateDuedate} setNewDuedate={setNewDuedate} duedates={duedates} setDuedates={setDuedates}/>
                ))}
            </View>
        </View>
    );
};

export default DuedateInput;