import React, { useRef, useEffect } from "react";
import { Dimensions, Animated, Text, View, StyleSheet, Button, SafeAreaView, Image } from "react-native";
import { theme } from '../theme';
import { images } from '../images';

const Animation = (label, children) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    //};
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
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
          {/* <Text style = {styles.fadingText}>You've grown up to the next step!</Text> */}
          <Image source = {images.growing} style = {{
            width: Dimensions.get('window').width-20,
            height: 100,
            marginRight: 20,
          }} />
        </View>
      </Animated.View>
      <View style={styles.buttonRow}>
        
        {/* <Button title="fadein" onPress={fadeIn} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 100,
  },
  fadingContainer: {
    width: Dimensions.get('window').width-50,
    height: 150,
    padding: 20,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 50,
  },
  fadingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.main,
    textAlign: 'center' //가운데 정렬
    //alignSelf: 'center',
    //justifyContent: 'center'
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default Animation;