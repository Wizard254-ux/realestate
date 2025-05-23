import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Properties from '../components/Properties';
import PropertyCard from '../components/PropertyInfo';

const Stack=createStackNavigator();
const StackRoutes= () => {
  return (
        <Stack.Navigator 
        screenOptions={{
            headerShown:false
        }}
        initialRouteName="Properties">
        <Stack.Screen 
          name="Properties" 
          component={Properties} 
          options={{ title: 'Property Listings' }}
        />
        <Stack.Screen 
          name="PropertyDetail" 
          component={PropertyCard} 
          options={{ title: 'Property Details' }}
        />
      
    </Stack.Navigator>
  )
}

export default StackRoutes

const styles = StyleSheet.create({})