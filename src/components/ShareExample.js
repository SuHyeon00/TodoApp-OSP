import React from 'react';
import { Share, View, Dimensions, StyleSheet, Pressable, Image } from 'react-native';
import { images } from '../images';
import { theme } from '../theme';

const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React \nhttps://expo.dev/@ossu/gro-wing',
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
        backgroundColor: theme.main,
        marginTop: 0,
        marginBottom: 5,
        marginLeft: Dimensions.get('window').width - 245,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
     }}>
       <Pressable onPressOut={onShare}>
            <Image source={images.share} style={iconStyle.icon}/>
        </Pressable>
    </View>
  );
};

const iconStyle = StyleSheet.create({
  icon: {
      tintColor: theme.background,
      width: 20,
      height: 20,
      margin: 10,
  },
});

export default ShareExample;