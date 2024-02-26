import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Home Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeHeader;
