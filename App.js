/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createTabNavigator, createSwitchNavigator } from 'react-navigation';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Splash from './Screens/Splash';







const App = createTabNavigator({
  Screen1: {
    screen: Screen1, navigationOptions: {
      title: 'Screen1'
    }
  },
  Screen2: {
    screen: Screen2, navigationOptions: {
      title: 'Screen2'
    }
  },
  Screen3: {
    screen: Screen3, navigationOptions: {
      title: 'Screen3'
    }
  }, Screen4: {
    screen: Screen4, navigationOptions: {
      title: 'Screen4'
    }
  }
}, {
    headerMode: 'screen',
    backBehavior:'none',
    tabBarPosition:'bottom',
    initialRouteName:'Screen3'
  })


const switchApp = createSwitchNavigator({
  Splash: {
    screen: Splash, navigationOptions: {
      header:null
    }
  },
  Root:{
    screen: App, navigationOptions: {
   
    }

  }
})
export default switchApp;
