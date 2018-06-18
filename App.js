/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Splash from './Screens/Splash';
import CollectionScreen from './Screens/CollectionScreen';


import { Icon } from 'react-native-elements'
import { TouchableHighlight,Image, BackHandler } from 'react-native'

console.disableYellowBox = true;

const playerScreenStack = createStackNavigator({
  PlayerScreen: {
    screen: Screen1, navigationOptions: ({ navigation, goBack }) =>
      ({
        header:null
      }),
  }
});
const playerListStack = createStackNavigator({
  PlayerListScreen:{
    screen:CollectionScreen,navigationOptions:({navigation,goBack}) =>
      ({
        title: 'Podsource',
        headerLeft: <TouchableHighlight style={{ marginLeft: 20}}  onPress={() => BackHandler.exitApp()}>
          <Image style={{width: 20, height: 20 }} source={require('./assets/images/cancel.png')} />
        </TouchableHighlight>,
        headerRight: <TouchableHighlight style={{ marginRight: 20}}  onPress={() => BackHandler.exitApp()}>
        <Image style={{width: 20, height: 20 }} source={require('./assets/images/search.png')} />
      </TouchableHighlight>,
        headerStyle: {
          backgroundColor: '#3D4246'
        },
        headerTintColor: '#fff',

    }),
  }
});


const App = createBottomTabNavigator({
  Screen1: {
    screen: playerScreenStack, navigationOptions: {
      title: 'Options',
      tabBarIcon: ({tintColor}) => <Icon
        name='more-horiz'  color={tintColor}  />
    }
  },
  Screen2: {
    screen: playerListStack, navigationOptions: {
      title: 'Collection',
      tabBarIcon: ({tintColor}) => <Icon
        name='collections'  color={tintColor} />
    }
  },
  Screen3: {
    screen: Screen3, navigationOptions: {
      title: 'Bookmark',
      tabBarIcon: ({tintColor}) => <Icon
        name='bookmark'  color={tintColor}  />
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'white',
      style: {
        backgroundColor: '#3D4246'
      }
    },
    headerMode: 'screen',
    backBehavior: 'none',
    initialRouteName: 'Screen1'
  })
// const App = createBottomTabNavigator({
//   Screen1:
//   {
//     screen:playerScreenStack,navigationOptions:{
//       title:'Option',
//       tabBarIcon:()=><Image
//       source={require('./assets/images/Collection.png')}
//     />
//     }
//   }
//   ,

//   Screen2:{
//     screen:playerListStack,navigationOptions:{
//       title:'Collection',
//       tabBarIcon:()=><Image
//       source={require('./assets/images/Collection.png')}
//     />
//     }
//   },
//     Screen3:{
//       screen:Screen3,navigationOptions:{
//         title:'Bookmark',
//         tabBarIcon:()=><Image source={require('./assets/images/Collection.png')}
//         />
//       }

//     },
// }, {
//     tabBarOptions: {
//       activeTintColor: 'white',
//       style: {
//         backgroundColor: '#3D4246'
//       }
//     },
//     headerMode: 'screen',
//     backBehavior: 'none',
//     initialRouteName: 'Screen1'
//   })


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
