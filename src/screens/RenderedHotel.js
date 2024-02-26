import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RenderedHotel = ({ item }) => (
  <View style={styles.hotelContainer}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.hotelName}>{item.title}</Text>
      <Text>{item.address}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>Reviews: {item.Reviews}</Text>
      <Text>Location: {item.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  hotelContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default RenderedHotel;
