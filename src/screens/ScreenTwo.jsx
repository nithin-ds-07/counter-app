import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenTwo = ({ navigation, route }) => {
  const [counter, setCounter] = useState(route.params?.counter || 0);
  const [isFocused, setIsFocused] = useState(true);
  let interval;

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    if (isFocused) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isFocused]);

  const handleScreen1Navigation = () => {
    navigation.navigate('ScreenOne');
  };

  const handleScreen3Navigation = () => {
    navigation.navigate('ScreenThree', { counter });
  };

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', handleFocus);
    const unsubscribeBlur = navigation.addListener('blur', handleBlur);
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation, handleFocus, handleBlur]);


  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 18, fontWeight: "600"}]}>Screen Two</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <TouchableOpacity onPress={handleScreen1Navigation} style={[styles.buttonStyle, {marginVertical: "5%"}]}>
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
