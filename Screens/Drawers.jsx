import { StyleSheet, Text,Pressable, Image,View } from 'react-native'
import React,{useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackRoutes from './Stack'
import Aboutus from './Aboutus'
import { Ionicons } from '@expo/vector-icons'


const drawer=createDrawerNavigator()
const Drawers = () => {
  return (
    <drawer.Navigator
   screenOptions={({ navigation }) => ({
    headerLeft:(()=>(
        <View style={{paddingHorizontal:4}}>
          <Image
          style={{width:47,height:47,borderRadius:10}}
           source={require('../assets/images/apartmentLogo.jpg')}
          />
        </View>
    )),
    headerStyle:{
     height:50,
    },
    headerTitleStyle:{
      display:'none'
    },
    headerRight: () => (
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: 10 }} // Adjust margin to align with your design
      >
        <Ionicons name="menu" size={30} color="black" />
      </Pressable>
    ),
    headerTitleAlign: 'center', // Center the title if needed
  })}
   >
    <drawer.Screen
    name='Home'
    component={StackRoutes}
    options={{
      headerTitle:'AlphaApartments',
     headerTitleStyle:{
      display:'flex',
      fontSize: 20,
      fontWeight: '700',
      color: '#2980B9',
      fontStyle: 'italic',
      letterSpacing: 0.5
     }
    }}
    />
    <drawer.Screen
    name='About Us'
    component={Aboutus}
    />
   </drawer.Navigator>
  )
}

export default Drawers

const styles = StyleSheet.create({})