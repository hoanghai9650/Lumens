import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import OrderHistory from './orderHistory';
import Notification from './notification';
import Profile from './profile';

import ImagePath from '../utils/ImagePath';

import {tabBarIcon} from '../components/TabBarIcon';

export type TabBarList = {
  HOME: undefined;
  ORDER_HISTORY: undefined;
  NOTIFICATION: undefined;
  PROFILE: undefined;
};

export default function Scenes() {
  const Tab = createBottomTabNavigator<TabBarList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        initialRouteName={'HOME'}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => tabBarIcon(focused, ImagePath.icon_home),
          }}
          name="HOME"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, ImagePath.icon_notification),
          }}
          name="NOTIFICATION"
          component={Notification}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, ImagePath.icon_history),
          }}
          name="ORDER_HISTORY"
          component={OrderHistory}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              tabBarIcon(focused, ImagePath.icon_profile),
          }}
          name="PROFILE"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
