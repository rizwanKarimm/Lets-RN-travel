import React from 'react';
import { Image, View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';
import ReusableText from './reusabletext/ReusableText';

const { width } = Dimensions.get('window');

const countries = [
  {
    "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
    "user": 30,
    "title": "Pakistan",
    "id": 6
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
    "user": 20,
    "title": "China",
    "id": 7
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
    "user": 13,
    "title": "India",
    "id": 8
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
    "user": 2,
    "title": "Indonesia",
    "id": 9
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
    "user": 30,
    "title": "Brazil",
    "id": 10
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/11.jpeg",
    "user": 29,
    "title": "Russia",
    "id": 11
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/12.jpeg",
    "user": 5,
    "title": "Mexico",
    "id": 12
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/13.jpeg",
    "user": 16,
    "title": "Japan",
    "id": 13
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/14.jpeg",
    "user": 28,
    "title": "Nigeria",
    "id": 14
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/15.jpeg",
    "user": 14,
    "title": "Bangladesh",
    "id": 15
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/16.jpeg",
    "user": 27,
    "title": "Egypt",
    "id": 16
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/17.jpeg",
    "user": 26,
    "title": "Germany",
    "id": 17
  }
];

const World = () => {
  const renderItem = ({ item }) => (
    <View style={styles.countryContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.worldContainer}>
        <ReusableText
          text="Places"
          family="Helvetica"
          size={22}
          color="blue"
        />
      </View>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 180, // Set container height to 100% of screen height
    
  },
  worldContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  countryContainer: {
    width: 130,
    height: 60,
    marginBottom: 10, // Adjust this value as needed
  },
  image: {
    width: width * 0.3,
    height: 60,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  flatListContent: {
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'flex-start',
  },
});

export default World;
