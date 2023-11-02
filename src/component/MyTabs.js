import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home_Screen from "../screen/Home_Screen";
import Notification_Screen from "../screen/Notification_Screen";
import Profile_Screen from "../screen/Profile_Screen";
import {Home2, Notification, Profile} from 'iconsax-react-native'
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home_Screen" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Trang chủ"
        component={Home_Screen}
        options={{
          tabBarIcon: ({focused}) => <Home2 color = {focused ? '#CC4900' : '#000' }/>,
          tabBarShowLabel:false,
          
            
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification_Screen}
        options={{
            tabBarShowLabel:false,
            tabBarIcon: ({focused})=><Notification color = {focused ? '#CC4900' : '#000' }/>
        }}
      />
      <Tab.Screen name="Cá nhân" component={Profile_Screen} 
        options={{
            tabBarShowLabel:false,
            tabBarIcon: ({focused})=> <Profile color = {focused ? '#CC4900' : '#000' } />
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
