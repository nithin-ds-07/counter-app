import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenTwo = ({ navigation, route }) => {
  const [counter, setCounter] = useState(route.params?.counter || 0);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScreen1Navigation = () => {
    setCounter(0);
    clearInterval(interval);
    navigation.navigate('ScreenOne', { counter });
  };

  const handleScreen3Navigation = () => {
    clearInterval(interval);
    navigation.navigate('ScreenThree', { counter });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <TouchableOpacity onPress={handleScreen1Navigation} style={styles.buttonStyle}>
        <Text style={{ color: "#ffffff" }}>Two To One</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScreen3Navigation} style={styles.buttonStyle}>
        <Text style={{ color: "#ffffff" }}>Two To Three</Text>
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

export default ScreenTwo;
