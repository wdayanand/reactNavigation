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
    const { goBack } = this.props.navigation;
    goBack('Screen3');

  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='GoTo2' style={styles.welcome} onPress={() => this.onClick()}>
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
