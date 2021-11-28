import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { images } from "../images";
import Input from "./Input";
import { commentStyle } from "../styles";  
import CommentInput from "./CommentInput";
import Item from "./Item";

const Comment = ({ setComments,comments, setNewComment, comment, deleteComment, updateComment }) => { //c->i
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(comment.text); //c->i

    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };
    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedComment = Object.assign({}, comment, {text}); //c->i
            setIsEditing(false);
            updateComment(editedComment);
        }
    };
    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(comment.text); //c->i
        }
    };

    return isEditing ? (
        <Input value={text} placeholder="+ Add a comment"
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur} setNewItem={setNewComment} items={comments} setItems={setComments}/>
    ) : (
        <View>
            <View style={commentStyle.container}>
                <Text style ={commentStyle.contents}>{comment.text}</Text>
                <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>
                <IconButton type={images.delete} id={comment.id} onPressOut={deleteComment} />
            </View>

        </View>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,  //c->i
    deleteComment: PropTypes.func.isRequired,
};

export default Comment;