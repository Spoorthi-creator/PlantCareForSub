import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Order from '../screens/Order';
import OrderList from '../screens/OrderList';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false}}>

        <Tab.Screen name="Home" component={Home}
          options={{tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />),
          }}/>

        <Tab.Screen name="Order" component={Order}
          options={{tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" color={color} size={size} />),
          }}/>

        <Tab.Screen name="OrderList" component={OrderList}
          options={{tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" color={color} size={size} />),
          }}/>
      </Tab.Navigator>
    );
  }
}
