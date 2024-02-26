import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
  {
    "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/11.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/12.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/13.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/14.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/15.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/16.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/17.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/18.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/19.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/20.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/21.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/22.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/23.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/24.jpeg",
    },
    {
    "url": "https://api.slingacademy.com/public/sample-photos/25.jpeg",
  
    }
];

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const scrollViewRef = useRef();

  const handleStart = () => {
    navigation.navigate('mytab');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        onLayout={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.url }} style={[styles.image, { width: windowWidth, height: windowHeight }]} resizeMode="cover" />
        ))}
      </ScrollView>
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>WELCOME TO NORTH SHADE DEVELOPMENT CENTER</Text>
        <Button title="Get Started" onPress={handleStart} color="brown" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set text color to white
  },
  image: {
    flex: 1,
  },
});

export default WelcomeScreen;
