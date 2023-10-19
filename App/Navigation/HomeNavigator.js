import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import React from 'react'
import Home from "../Screen/Home";

const Stack = createStackNavigator



const HomeNavigator = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name = 'home' component={Home}  />
   </Stack.Navigator>
  )
}

export default HomeNavigator