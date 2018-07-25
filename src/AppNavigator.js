/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Home from './Screens/Home';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Discover from './Screens/Discover';
import ShowsTitle from './Screens/ShowsTitle';
import Library from './Screens/Library';
import Splash from './Screens/Splash';
import SearchResult from './Screens/SearchResult'
import CollectionScreen from './Screens/CollectionScreen';
import EpisodesShows from './Screens/EpisodesShows'; //Rahul

import PlayMusic from './Screens/PlayMusic';
import { Platform } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { TouchableHighlight, Image, BackHandler, View, ImageBackground, Text } from 'react-native'

console.disableYellowBox = true;


const libraryepisodesStack = createStackNavigator({
  Library: {
    screen: Library, navigationOptions: ({ navigation, goBack }) =>
      ({
        header: null
      }),
  },
  EpisodesShows: {
    screen: EpisodesShows, navigationOptions: ({ navigation, goBack }) =>
      ({
        
      }),
  }
});

const playerScreenStack = createStackNavigator({
  PlayerScreen: {
    screen: Home, navigationOptions: ({ navigation, goBack }) =>
      ({
        header: null
      }),
  }
});
const playerListStack = createStackNavigator({


  CollectionScreen: {
    screen: CollectionScreen, navigationOptions: ({ navigation, goBack }) =>
      ({
        header: null
      })
  },
  ShowsTitle: {
    screen: ShowsTitle, navigationOptions: ({ navigation, goBack }) =>
      ({
      

      })
  }
  ,
  SearchResult: {
    screen: SearchResult, navigationOptions: ({ navigation, goBack }) =>
      ({
        header: ( /* Your custom header */
          <View
            style={{
              flexDirection: 'row',
              height: 64,
              marginTop: 20,/* only for IOS to give StatusBar Space */
              backgroundColor: '#262626',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View style={{justifyContent: 'flex-start'}}><TouchableHighlight style={{
               width: 10, height: 10,color:'gray'
            }}
            onPress={() => navigation.goBack()
            }
              title="fgfdgfdg"
              accessibilityLabel="Learn more about this purple button"

            //  backgroundColor='red'
            >
              <Image
        source={require('./assets/images/left-arrow-key.png')}
      />
            </TouchableHighlight>
            </View>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: '#B9D3EE', textAlign: 'center' }}>P o d s o u r c e</Text>
            </View>
            <View style={{justifyContent: 'flex-end',width:25}}>
            </View>


          </View>
        )

      })
  }


});



const DiscoveryList = createStackNavigator({
  Discover: {
    screen: Discover, navigationOptions: ({ navigation, goBack }) =>
      ({
        header: null
      })
  },
  


});


const App = createBottomTabNavigator({
  Home: {
    screen: playerScreenStack, navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon
        name='more-horiz' color={tintColor} />
    }
  },
  CollectionScreen: {
    screen: playerListStack
    , navigationOptions: {
      title: 'Stumble',
      tabBarIcon: () => <Image source={require('./assets/images/magicLamp.png')} style={{ width: 30, height: 30 }} />


    }
  },
  Screen3: {
    screen: Screen3, navigationOptions: {
      title: 'Bookmark',


      tabBarIcon: ({ tintColor }) => <Icon
        name='bookmark' color={tintColor} />
    }
  },
  Library:
    {
      screen: libraryepisodesStack, navigationOptions:
        {

          title: 'Library',
          backgroundColor: 'red',
          tabBarIcon: () => <Image source={require('./assets/images/books.png')} style={{ width: 25, height: 25 }} />
        }
    },
  Discover:
    {
      screen: DiscoveryList, navigationOptions:
        {
          title: 'Discover',
          tabBarIcon: () => <Image source={require('./assets/images/world.png')} style={{ width: 25, height: 25 }} />
        }
    }
},
  {
    tabBarOptions: {

      activeTintColor: 'red',
      inactiveTintColor: 'white',

      style: {
        backgroundColor: '#696969'
      }
    },
    headerMode: 'screen',
    backBehavior: 'none',
    initialRouteName: 'Home'
  })
// const App = createBottomTabNavigator({
//   Home:
//   {
//     screen:playerScreenStack,navigationOptions:{
//       title:'Option',
//       tabBarIcon:()=><Image
//       source={require('./assets/images/Collection.png')}
//     />
//     }
//   }
//   ,

//   CollectionScreen:{
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
//     initialRouteName: 'Home'
//   })

var switchApp = createSwitchNavigator
if (Platform.OS == 'ios') {
  switchApp = createSwitchNavigator({
    Root: {
      screen: App, navigationOptions: {
      }
    }
  })
}
else {
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
