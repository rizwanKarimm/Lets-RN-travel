import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from '../components/header/HomeHeader'; // Import the HomeHeader component
import Places from './Places';
import World from './World';
import NearbyHotels from './NearbyHotels';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <World />
     <Places />
     <NearbyHotels/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set background color as needed
  },
});

export default HomeScreen;
