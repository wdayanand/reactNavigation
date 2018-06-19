/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BackHandler, Slider, Image, Button, Alert } from 'react-native'
import { Toolbar } from 'react-native-material-ui';
import { scale, moderateScale, verticalScale } from '../utility/scaling';
import { I18n } from '../utility/translations/Locale';


export default class App extends Component {
  constructor(props) {
    super(props);


    var Dimensions = require('Dimensions');
    var {
      width,
      height
    } = Dimensions.get('window');

    this.state = { titleBarHiddneStatus: false, value: 0, minval: 0, maxval: 100, screenWidth: width, screenHeight: height };
  }

  onClick() {
    const { navigate } = this.props.navigation
    navigate('Screen2', { screen: 'screen2' })

  }
  appClose() {
    BackHandler.exitApp()


  }


  /**
          * Called when search text was changed.
          */
  onChangeText(input) {

  }
  /**
  * Called when search was closed.
  */
  onSearchClosed() {

  }
  /**
  * Called when action to close search was requested.
  */
  onSearchCloseRequested() {

  }
  /**
  * Called when search was opened.
  */
  onSearchPressed() {

  }
  /**
  * Called when user press submit button on hw keyboard
  */
  onSubmitEditing() {
    Alert.alert('text=')
  }


  render() {
    return (


      <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#150030' }}>
        <Toolbar
          leftElement="close"
          centerElement="Podsource"
          onLeftElementPress={() => this.appClose()}
          searchable={{
            onSubmitEditing: () => this.onSubmitEditing(),
            onChangeText: (input) => this.onChangeText(input),
            autoFocus: true,
            placeholder: 'Search',
          }}
        />
       
        <Text style={{ color: 'white', marginTop: 10, alignSelf: 'center' }}>{this.state.value} min remaining</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: 'white' }}>0:30</Text>
          <Slider
            maximumTrackTintColor='#ff00ff'
            minimumValue={1}
            style={{ width: moderateScale(250), alignItems: 'stretch' }}
            maximumValue={100}
            step={1}
            value={this.state.value}
            onValueChange={(value) => this.setState({ value })} />
          <Text style={{ color: 'white' }}>5:30</Text>
        </View>
        <Text style={{ color: 'white', alignSelf: 'center' }}>Add section</Text>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          alignItems: 'center'
        }}>

          <Image style={{ width: moderateScale(150), height: moderateScale(150), alignSelf: 'center' }} source={require('../assets/images/mdisk.png')} />
          <View style={{ width: this.state.screenWidth - 200, margin: 20, padding: 5, backgroundColor: '#5E486B' }}>
            <Text style={{ margin: 1, color: 'white', alignSelf: 'center' }}>Show title</Text>
            <Text style={{ margin: 1, color: 'white', alignSelf: 'center' }}>Episode title</Text>
          </View>

        </View>
        <View style={{

          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf:'center',
            alignItems: 'center',
          }}>
            <Image style={{ margin: 20, width: moderateScale(20), height: moderateScale(20), alignSelf: 'center' }} source={require('../assets/images/prev15.png')} />
            <Image style={{ margin: 20, width: moderateScale(30), height: moderateScale(30), alignSelf: 'center' }} source={require('../assets/images/play_prev.png')} />
            <Image style={{ margin: 20, width: moderateScale(60), height: moderateScale(60), alignSelf: 'center' }} source={require('../assets/images/play-button.png')} />
            <Image style={{ margin: 20, width: moderateScale(30), height: moderateScale(30), alignSelf: 'center' }} source={require('../assets/images/play_next.png')} />
            <Image style={{ margin: 20, width: moderateScale(20), height: moderateScale(20), alignSelf: 'center' }} source={require('../assets/images/next15.png')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
