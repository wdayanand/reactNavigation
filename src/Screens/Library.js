import React, { Component } from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';

export default class Library extends React.Component {
  onClick()
  {
    this.props.navigation.navigate('EpisodesShows')
  }
  render() {
    return (
      <View>                
        <Button onPress = {() => this.onClick()} title = "Episodes Shows" > </Button>        
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    buttonStyle:{
      paddingTop : 100
    }
  }
)
