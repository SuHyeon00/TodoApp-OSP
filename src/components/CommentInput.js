import * as React from 'react';
import { images } from '../images';
import IconButton from './IconButton';
import {TextInput, View, Dimensions} from "react-native";
import { inputStyle } from "../styles";
import {theme} from "../theme";
import Comment from './Comment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const CommentInput = () => {
    const width = Dimensions.get('window').width;

    const [newComment, setNewComment] = React.useState('');
    const [comments, setComments] = React.useState({});

    const [isReady, setIsReady] = React.useState(false);

    const _saveComments = async comments => {
        try {
            await AsyncStorage.setItem('comments', JSON.stringify(comments));
            setComments(comments);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadComments = async () => {
        const loadedComments = await AsyncStorage.getItem('comments');
        setComments(JSON.parse(loadedComments || '{}'));
    }

    // add a comment
    const _addComment = () => {
        const ID = Date.now().toString();
        const newCommentObject = {
            [ID]: {id: ID, text:newComment},
        };
        setNewComment('');
        _saveComments({...comments, ...newCommentObject});
    };

    // delete a comment
    const _deleteComment = id => {
        const currentComment = Object.assign({}, comments);
        delete currentComment[id];
        _saveComments(currentComment);
    };

    // edit a comment
    const _updateComment = comment => {   //item -> comment?
        const currentComment = Object.assign({}, comments);
        currentComment[comment.id] = comment;
        _saveComments(currentComment);
    };

    const _onBlur = () => {
        setNewComment('');
    };

    const _handleTextChangeComment = text => {
        setNewComment(text);
    };
    
   
    return isReady? (
        <View>
            <View width={width-20}>
                {Object.values(comments).reverse().map(comment => (
                    <Comment key={comment.id} comment={comment}
                    deleteComment={_deleteComment}
                    updateComment={_updateComment} setNewComment={setNewComment} comments={comments} setComments={setComments}/>
                ))}
            </View>
            
            <View style={{flexDirection:'row'}}>
                <IconButton type={images.comment} />
                <TextInput style = {inputStyle.commentInput}
                    placeholder="+Add a comment"
                    placeholderTextColor= {theme.main}
                    value={newComment} onChangeText={_handleTextChangeComment} onSubmitEditing={_addComment} onBlur={_onBlur}>
                </TextInput>
            </View>
        </View>
    )   :   (
        <AppLoading
        startAsync={_loadComments}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
};

export default CommentInput;