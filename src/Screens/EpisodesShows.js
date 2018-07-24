import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import {View,Button,StyleSheet,Alert,TouchableOpacity,Image,Platform,SectionList,Text} from 'react-native'
import SegmentControl from 'react-native-segmented-control-tab'

const Color  = require('../Constants/ConstantColor');

export default class EpisodesShows extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            selectedTabIndex:0,
            segTitleArray:['Episodes','Shows','Mentions'],
            segBedgeArray:[0,0,0]
         }        
    }
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
                        <TouchableOpacity style={styles.TouchButtonIconStyle} activeOpacity={0.5}> 
                            <Image 
                            source={require('../assets/images/ic_book_shows.png')} 
                            style={styles.ImageIconStyle} 
                            />                            
                            </TouchableOpacity>
                    </View>
                    
                    
      })
      onClick()
        {
            Alert.alert('Done')
            this.setState({selectedTabIndex:1})
        }
        actionOnClear()
        {

        }
    render() {
        var A = [{"id":1,"name":"Charil","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/inga.dolinski5412f2b3e215a.png","time":"75 minutes"},
        {"id":1,"name":"Charil","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/MsMattheis52275fc720136.png","time":"75 minutes"}] ;
        var B = [{"id":1,"name":"Charil","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"}] ;        
        GetSectionListItem=(item)=>{

            Alert.alert(item)
        
          }
        return (           
                    <View style={{flex: 1,backgroundColor:Color.COL_10_14_25, marginTop : (Platform.OS) == 'ios' ? 0 : 0 }}>
                            <View style={{ backgroundColor : Color.COL_10_14_25,height:90,flexDirection:'column'}}>
                                <View style={{paddingTop: 15, paddingLeft: 35, paddingRight: 35 }}>
                                    <SegmentControl
                                        values={this.state.segTitleArray}
                                        badges={this.state.segBedgeArray}
                                        selectedIndex={this.state.selectedTabIndex}
                                        height={40}
                                        onTabPress = {(selectedIndex) => this.setState({selectedTabIndex:selectedIndex})}
                                        borderRadius={8}
                                        tabsContainerStyle = {styles.tabsContainerStyle}
                                        activeTabStyle = {styles.activeTab}
                                        tabStyle = {styles.tabsStyle}
                                        tabTextStyle = {{color:'white',fontFamily: "arial",fontSize: 18}}
                                        activeTabTextStyle = {{color:'yellow'}}
                                                        />
                                </View>
                                <View style={{backgroundColor:'white' , height:1,marginTop:10}}></View>
                            </View>
                            <SectionList 
                                sections={[
                                    { title: 'My Library Results', data: A },
                                    { title: 'Discover More', data: B },
                                ]}
                                ItemSeparatorComponent={Separator}                      
                                renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
                                renderItem={ ({item}) => 
                                        <View style={styles.itemBlock}>
                                            <View>
                                                <Image source={{uri: item.picture}} style={styles.itemImage}/>
                                                <Text style={styles.itemTime}>{item.time}</Text>                                        
                                            </View>
                                            <View style={styles.itemMeta}>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                                <Text style={styles.itemLastMessage}>{item.last_message}</Text>
                                            </View>                                                
                                         </View>}
                                keyExtractor={ (item, index) => index }
                            />

                    </View>
        );
    }
}
const Separator = () => (
    <View style={[styles.separatorContainer]} />
  );
const styles = StyleSheet.create(
    {
        tabsContainerStyle:{
            backgroundColor : Color.CLEAR,
        },
        tabsStyle:{
            backgroundColor : Color.COL_0_49_125,
            borderColor: Color.RED,
        },
        activeTab:{
            backgroundColor : Color.COL_28_75_144
        },
        ImageIconStyle:{
          width:40,
          height:40,
          marginTop:0,
          paddingLeft:5
        },
        TouchButtonIconStyle:{
            width:35,
            height:40,
            marginTop:-5,
            paddingLeft:8
          },
          SectionHeaderStyle:{ 
            backgroundColor : Color.COL_16_20_30,            
            padding: 10,
            color: '#fff',
            textAlign: 'right', // <-- the magic
            fontSize: 16,
            marginTop: 0,                    
          },
          separatorContainer: {
            height: 0.7,
            paddingLeft:10,
            backgroundColor: 'white',
          },        
          SectionListItemStyle:{         
            fontSize : 15,
            padding: 5,
            color: '#000',
            backgroundColor : '#F5F5F5'         
          },
          itemBlock: {
            flexDirection: 'row',
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 12,
          },
          itemImage: {
            width: 80,
            height: 50,
            paddingLeft:20,
            borderRadius: 0,
          },
          itemTime: {
            fontSize: 10,
            color: "white",
            width: 80,
            height: 15,
            paddingTop:5,
            textAlign: 'center',
          },
          itemMeta: {
            marginLeft: 10,
            justifyContent: 'center',
          },
          itemName: {
            fontSize: 22,
            color: "white",
          },
          itemLastMessage: {
            fontSize: 14,
            color: "white",
          }
    }
)
