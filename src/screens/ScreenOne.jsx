import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenOne = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const handleScreen2Navigation = () => {
    navigation.navigate('ScreenTwo', { counter });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <TouchableOpacity onPress={handleScreen2Navigation} style={styles.buttonStyle}>
        <Text style={{ color: "#ffffff" }}>One To Two</Text>
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

export default ScreenOne;
