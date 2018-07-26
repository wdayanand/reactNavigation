import React, { Component } from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';

export default class Library extends React.Component {
  onClick()
  {
    this.props.navigation.navigate('EpisodesShows')
  }
  onClickNews()
  {
    this.props.navigation.navigate('NewsVC')
  }
  render() {
    return (
      <View style={{justifyContent:'center',flex:1}}>                
        <Button onPress = {() => this.onClick()} title = "Episodes Shows" > </Button>
        <Button onPress = {() => this.onClickNews()} title = "News" > </Button>        
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
