import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableText from './reusabletext/ReusableText';
import Country from './Country';
import FeatherIcon from 'react-native-vector-icons/Feather'; // Import FeatherIcon

const Place = ({ countries }) => {
  const handlePress = () => {
    // Handle onPress event
    console.log('Icon pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.placesContainer}>
        <ReusableText
          text="Recommendation"
          family="Helvetica"
          size={22}
          color="blue"
          style={styles.text} // Apply styles to the ReusableText component
        />
        <TouchableOpacity
          style={styles.iconContainer} // Apply styles to the TouchableOpacity component
          onPress={handlePress}
        >
          <FeatherIcon name="list" size={30} color="red" style={styles.icon} />
        </TouchableOpacity>
        <Country style={styles.places} />
      </View>
      <View>
        <Country countries={countries} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  placesContainer: {
    width: '100%',
    height: 200, // Manually set the height to 200 (adjust as needed)
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 0,
    position: 'relative', // Add relative positioning to the container
  },
  text: {
    position: 'absolute',
    left: 10, // Adjust left positioning as needed
    top: 0, // Align text to the top
  },
  iconContainer: {
    position: 'absolute',
    right: 10, // Adjust right positioning as needed
    top: 0, // Align icon to the top
  },
  icon: {
    alignSelf: 'flex-end',
  },
});

export default Place;
