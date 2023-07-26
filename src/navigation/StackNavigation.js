import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="ScreenOne" screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
