/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';



export default class App extends Component {
  onClick() {
    const { navigate } = this.props.navigation
    navigate("Screen4",{})

  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Back' style={styles.welcome} onPress={() => this.onClick()}>
          Screen1
        </Button>

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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
