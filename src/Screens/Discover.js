import React, { Component } from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';

export default class HelloWorldApp extends React.Component {

    
onClick()
{
//this.props.navigation.navigate('ShowsTitle')
}
render() {
return (
<View style={{paddingTop:300}}> 
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
