/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Screen1 from './Screens/Screen1';
import Search from './Screens/Search';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Splash from './Screens/Splash';
import CollectionScreen from './Screens/CollectionScreen';
import {Platform} from 'react-native';



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
        header:null,
        

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
    screen: Search, navigationOptions: {
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

const switchApp = createSwitchNavigator
if(Platform.OS == 'ios')
{
   switchApp = createSwitchNavigator({
    Root: {
      screen: App, navigationOptions: {
      }

    }
  })
}
else{
   switchApp = createSwitchNavigator({
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
}

export default switchApp;
