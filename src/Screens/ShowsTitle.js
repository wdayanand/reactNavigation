
import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class HelloWorldApp extends React.Component {
    constructor(props) 
    {
        super(props)
        this.state={textTitle:'Show Title'}

    }


    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'gray'
        },

      })
  render() {
    return (
      <View style = {styles_View.container}>
        <Text style={{paddingTop:20,fon}}>{this.state.textTitle}</Text>
      </View>
    );
  }
}


const styles_View = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
  });
  