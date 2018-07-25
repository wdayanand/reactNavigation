import React, { Component } from 'react';
import { Text, View, Button,StyleSheet ,ImageBackground,Alert} from 'react-native';


export default class HelloWorldApp extends React.Component {
    
      
        


      getGridViewItem (item) {
  
        Alert.alert(item);
        
        }
    
onClick()
{
//this.props.navigation.navigate('ShowsTitle')
}
render() {
return (
<View>
<ImageBackground source={require('../assets/images/Bck1.png')} style={{width:'100%',height:'100%'}}>

</ImageBackground>
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
