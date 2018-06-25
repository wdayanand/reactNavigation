import React, { Component } from 'react';
import { getSongs } from '../services/api'
import { FlatList, ActivityIndicator, Text, View,ScrollView,Alert,Slider} from 'react-native';
import Sound from 'react-native-sound'


  export default class FetchExample extends React.Component 
  {
   constructor(props){
      super(props);
      this.state = {
        currentTime: 0,
        index: 0,
        playList :[]
      }
    }
  
    componentDidMount() {
        this.didBlurSubscription = this.props.navigation.addListener(
          'didFocus',
          payload => {
            this.setState({ visible: true })
            getSongs()
            .then((response) => response.json())   
            
           .then((responseJson) => { this.setState({ visible: false })
          // .then(playList =>  this.setState({playList}))
           this.setState({playList:responseJson})
                console.info(responseJson);
                return responseJson;
              })
              .catch((error) => {
                this.setState({ visible: false })
                Alert.alert("" + error.message)
              });
          }
        );
      }

      componentWillUnmount() {
        didBlurSubscription.remove();
      }
    
  
  
  
    render(){
  
      return(
        <View style={{flex: 1, paddingTop:20}}>
         
        </View>
      );
    }
  }