import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDeatils/BusinessDetailsScreen';
const Stack = createStackNavigator();
const HomeNavigaton = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='business-List' component={BusinessListByCategoryScreen} />
    <Stack.Screen name ='business-details' component={BusinessDetailsScreen}/>
  </Stack.Navigator>
  )
}

export default HomeNavigaton