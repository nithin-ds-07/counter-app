import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenThree = ({ navigation, route }) => {
  const [counter, setCounter] = useState(route.params?.counter || 0);
  let interval;

  const handleScreenTwoNavigation = () => {
    clearInterval(interval);
    navigation.navigate('ScreenTwo', { counter });
  };

  const handleScreen1Navigation = () => {
    setCounter(0);
    navigation.navigate('ScreenOne', { counter });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <TouchableOpacity onPress={handleScreenTwoNavigation} style={styles.buttonStyle}>
        <Text style={{ color: "#ffffff" }}>Three To Two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScreen1Navigation} style={styles.buttonStyle}>
        <Text style={{ color: "#ffffff" }}>Three To One</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "black"
  }
});

export default ScreenThree;
