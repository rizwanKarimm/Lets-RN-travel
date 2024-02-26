import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReusableText = ({ text, family = 'Arial', size = 14, color = 'black' }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: family, fontSize: size, color: color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
});

export default ReusableText;
