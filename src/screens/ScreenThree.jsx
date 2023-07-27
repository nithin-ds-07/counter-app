import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenThree = ({ navigation, route }) => {
  const [counter, setCounter] = useState(route.params?.counter || 0);

  const handleScreenTwoNavigation = () => {
    navigation.navigate('ScreenTwo');
  };

  const handleScreen1Navigation = () => {
    navigation.navigate('ScreenOne');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 18, fontWeight: "600"}]}>Screen Three</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <TouchableOpacity onPress={handleScreenTwoNavigation} style={[styles.buttonStyle, {marginVertical: "5%"}]}>
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
