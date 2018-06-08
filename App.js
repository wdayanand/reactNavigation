/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Splash from './Screens/Splash';

import { Icon } from 'react-native-elements'





const App = createBottomTabNavigator({
  Screen1: {
    screen: Screen1, navigationOptions: {
      title: 'Options',
      tabBarIcon: () => <Icon
        name='more-horiz' />
    }
  },
  Screen2: {
    screen: Screen2, navigationOptions: {
      title: 'Collection',
      tabBarIcon: () => <Icon
      name='collections' />
    }
  },
  Screen3: {
    screen: Screen3, navigationOptions: {
      title: 'Bookmark',
      tabBarIcon: () => <Icon
      name='bookmark' />
    }
  }
}, {
    headerMode: 'screen',
    backBehavior: 'none',
    initialRouteName: 'Screen1'
  })


const switchApp = createSwitchNavigator({
  Splash: {
    screen: Splash, navigationOptions: {
      header: null
    }
  },
  Root: {
    screen: App, navigationOptions: {

    }

  }
})
export default switchApp;
