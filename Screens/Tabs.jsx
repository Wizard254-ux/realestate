import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import ContactUs from './ContactUs'
import { Ionicons } from '@expo/vector-icons'
import Blogs from '../components/Blogs'
import { Newspaper ,Info,Warehouse} from 'lucide-react-native'
import Aboutus from './Aboutus'
import PropertyListing from './PropertyListing'

const Tab=createBottomTabNavigator()



const Tabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({ route }) => ({
      tabBarShowLabel:false,
      tabBarIconStyle:{
        marginTop:10
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'ContactUs') {
          iconName = focused ? 'person' : 'person-outline';
        } 

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle:{
        backgroundColor:'black',
        height:60
      }
    })}
  >
           <Tab.Screen name="Blogs" component={Blogs} 
            options={{
               headerShown:false,
               tabBarIcon: ({ focused }) => <Newspaper size={24} color={focused? 'tomato':'gray'} />

            }}
           />
     
     <Tab.Screen name="PropertyListing" component={PropertyListing} 
      options={{
         headerShown:false,
         tabBarIcon:({focused})=> <Warehouse size={24} color={focused? 'tomato':'gray'} />
      }}
     />

        <Tab.Screen name="Home" component={Home} 
         options={{
            headerShown:false,

            tabBarIconStyle:{
              transform:[
                {scaleX:1.5},
                {scaleY:1.5}
              ],
              marginTop:10
            }
         }}
        />
        <Tab.Screen name="Aboutus" component={Aboutus} 
         options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => <Info size={26} color={focused? 'tomato':'gray'} />
         }}
        />
        <Tab.Screen name="ContactUs" component={ContactUs} 
         options={{
            headerShown:false,
         }}
        />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})