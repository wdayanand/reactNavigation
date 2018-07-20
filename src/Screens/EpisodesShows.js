import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import {View,Button,StyleSheet,Alert} from 'react-native'
import SegmentControl from 'react-native-segmented-control-tab'

const Color  = require('../Constants/ConstantColor');

export default class EpisodesShows extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',        
        headerStyle: {
          backgroundColor: Color.COL_34_34_34
        },
        headerRight:<View style={{ flex: 1, paddingTop: 0, paddingLeft: 0, paddingRight: 0 ,backgroundColor : Color.COL_34_34_34}}>        
                        <Button title = 'X'></Button>
                    </View>
                    ,        
        headerLeft:<View style={{ flex: 1, paddingTop: 0, paddingLeft: 0, paddingRight: 0 ,backgroundColor : Color.COL_34_34_34}}>        
                        <Button title = 'X'></Button>
                    </View>
                    
                    
      })
      onTabPress()
        {
            Alert.alert('Done')
        }
        actionOnClear()
        {

        }
    render() {
        return (
            /*<View style={{ flex: 1, paddingTop: 0, paddingLeft: 100, paddingRight: 0 ,backgroundColor : Color.COL_34_34_34}}>
                        <SearchBar
                        onChangeText={() => onChangeText()}
                         onClear={() => actionOnClear()}
                         placeholder='Type Here...' />
            </View>*/
        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 35, paddingRight: 35 ,backgroundColor : 'gray'}}>
             <SegmentControl
                values={['Episode', 'Shows', 'Mentions']}
                badges={[0, 0, 0, 0]}
                selectedIndex={0}
                height={50}
                onTabPress = {() => {}}
                borderRadius={0}
                tabsContainerStyle = {styles.tabsContainerStyle}
                activeTabStyle = {styles.activeTab}
                tabStyle = {styles.tabsStyle}
                tabTextStyle = {{color:'white',fontFamily: "arial",fontSize: 18}}
                activeTabTextStyle = {{color:'yellow'}}
                                />
        </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        tabsContainerStyle:{
            backgroundColor : Color.CLEAR,
        },
        tabsStyle:{
            backgroundColor : Color.COL_0_49_125,
            borderColor: 'white',
        },
        activeTab:{
            backgroundColor : Color.COL_28_75_144
        }
    }
)
