import * as React from 'react';
import { useState } from 'react';
import { images } from '../images';
import {TextInput, View, Dimensions, Image, StyleSheet} from "react-native";
import {theme} from "../theme";
import Comment from './Comment';

const CommentInput = () => {
    const width = Dimensions.get('window').width;

    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState({});

    // add a comment
    const _addComment = () => {
        const ID = Date.now().toString();
        const newCommentObject = {
            [ID]: {id: ID, text:newComment},
        };
        setNewComment('');
        setComments({...comments, ...newCommentObject});
    };

    // delete a comment
    const _deleteComment = id => {
        const currentComment = Object.assign({}, comments);
        delete currentComment[id];
        setComments(currentComment);
    };

    // edit a comment
    const _updateComment = comment => {   //item -> comment?
        const currentComment = Object.assign({}, comments);
        currentComment[comment.id] = comment;
        setComments(currentComment);
    };

    const _onBlur = () => {
        setNewComment('');
    };

    const _handleTextChangeComment = text => {
        setNewComment(text);
    };
    
   
    return (
        <View>
            <View style={{flexDirection:'row', marginVertical: 3}}>
                <Image source={images.comment} style={styles.icon}/>
                <TextInput style = {styles.commentInput}
                    placeholder="+Add a comment"
                    placeholderTextColor= {theme.main}
                    value={newComment} onChangeText={_handleTextChangeComment} onSubmitEditing={_addComment} onBlur={_onBlur}>
                </TextInput>
            </View>

            <View width={width-20}>
                {Object.values(comments).reverse().map(comment => (
                    <Comment key={comment.id} comment={comment}
                    deleteComment={_deleteComment}
                    updateComment={_updateComment} setNewComment={setNewComment} comments={comments} setComments={setComments}/>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        tintColor: theme.text,
        width: 25,
        height: 25,
        marginVertical: 5,
        marginHorizontal: 8,
    },
    commentInput :{
        fontSize: 15,
        width: Dimensions.get('window').width-70,
        height: 35,
        paddingLeft: 15,
        borderRadius: 30,
        backgroundColor: '#C0DAB8',
        color: theme.text,

    }
});

export default CommentInput;

/*63부터 comment를 item으로 바꿔봄*/