import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },

  {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'slateblue'
      },
      showLabel: false,
    },
    defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home';
        } else if (routeName === 'Profile') {
          iconName = 'md-person';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    })

  }

);

export default createAppContainer(TabNavigator);
