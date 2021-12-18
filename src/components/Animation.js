import React, { useRef, useEffect, useState } from "react";
import { Dimensions, Animated, Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import { theme } from '../theme';
import { images } from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Animation = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [rewards, setRewards] = useState('');

  useEffect(() => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();

     AsyncStorage.getItem('rewards').then(loadedRewards => {
        const _rewardStringify = (JSON.stringify(loadedRewards));
        const _rewardParse = (JSON.parse(_rewardStringify));
        if(_rewardParse != null){
            const _reward = _rewardParse.replace(/["]+/g, '');
            setRewards(_reward);
        }
    });
  }, []);
  
  return (
    <SafeAreaView style={{
      width: Dimensions.get('window').width-80,
      }}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <View>
          <Text style = {{
            fontSize: 25,
            fontWeight: 'bold',
            color: theme.main,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            textAlign: 'center',
            marginTop: 10,
          }}>{rewards}</Text>
          <Image source = {images.growing}
            style={{ 
              width: 350,
              height: 100,
              marginTop: 10,
            }} />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    //width: Dimensions.get('window').width-50,
    //height: 250,
    //padding: 20,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 6,
    //marginBottom: 50,
  },
});

export default Animation;