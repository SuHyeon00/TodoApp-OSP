import React from 'react';
import { Share, View, Button, Dimensions } from 'react-native';
import { images } from '../images';
import { theme } from '../theme';
import IconButton from './IconButton';

const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ 
        borderRadius: 100/2,
        backgroundColor: theme.Grey,
        marginLeft: Dimensions.get('window').width - 60,
        marginBottom: 10,
        ustifyContent: 'flex-end',
        alignItems: 'flex-end',
     }}>
      <IconButton type={images.share} onPressOut={onShare} />
    </View>
  );
};

export default ShareExample;