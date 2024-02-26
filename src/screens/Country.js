import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const countries = [
  {
    "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
    "user": 30,
    "title": "Mariat Hotel", // Capital city of Pakistan
    "id": 6,
    "Reviews": "200",
    "rating": "4.5",
    "location": "Pakistan"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
    "user": 20,
    "title": "Jin Jiang Hotel", // Capital city of China
    "id": 7,
    "Reviews": "300",
    "rating": "4.7",
    "location": "China"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
    "user": 13,
    "title": "Taj Palace Hotel", // Capital city of India
    "id": 8,
    "Reviews": "150",
    "rating": "4.2",
    "location": "India"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
    "user": 2,
    "title": "Mandarin Oriental Hotel", // Capital city of Indonesia
    "id": 9,
    "Reviews": "180",
    "rating": "4.3",
    "location": "Indonesia"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
    "user": 30,
    "title": "Grand Mercure Brasília Hotel", // Capital city of Brazil
    "id": 10,
    "Reviews": "250",
    "rating": "4.6",
    "location": "Brazil"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/11.jpeg",
    "user": 29,
    "title": "The Ritz-Carlton Hotel", // Capital city of Russia
    "id": 11,
    "Reviews": "280",
    "rating": "4.8",
    "location": "Russia"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/12.jpeg",
    "user": 5,
    "title": "Four Seasons Hotel", // Capital city of Mexico
    "id": 12,
    "Reviews": "220",
    "rating": "4.4",
    "location": "Mexico"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/13.jpeg",
    "user": 16,
    "title": "The Peninsula Tokyo", // Capital city of Japan
    "id": 13,
    "Reviews": "320",
    "rating": "4.9",
    "location": "Japan"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/14.jpeg",
    "user": 28,
    "title": "Hilton Abuja Hotel", // Capital city of Nigeria
    "id": 14,
    "Reviews": "270",
    "rating": "4.7",
    "location": "Nigeria"
  },
  {
    "url": "https://api.slingacademy.com/public/sample-photos/15.jpeg",
    "user": 14,
    "title": "Pan Pacific Sonargaon Dhaka", // Capital city of Bangladesh
    "id": 15,
    "Reviews": "190",
    "rating": "4.2",
    "location": "Bangladesh"
  }
];

console.log(countries); // Check the updated array

const Country = ({ url, title, Reviews, rating, location }) => {
  return (
    <View style={styles.countryContainer}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>Reviews: {Reviews}</Text>
        <Text>Rating: {rating}</Text>
        <Text>Location: {location}</Text>
      </View>
    </View>
  );
};

const renderItem = ({ item }) => (
  <Country
    url={item.url}
    title={item.title}
    Reviews={item.Reviews}
    rating={item.rating}
    location={item.location}
  />
);

const keyExtractor = (item) => item.id.toString();

const CountryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    width: width - 20,
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  flatListContent: {
    alignItems: 'center',
  },
});

export default CountryList;
