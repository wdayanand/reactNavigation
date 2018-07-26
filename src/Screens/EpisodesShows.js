import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import {View,Button,StyleSheet,Alert,TouchableOpacity,Image,Platform,SectionList,Text,FlatList} from 'react-native'
import SegmentControl from '../components/SegmentedControlTab'

import { Toolbar } from 'react-native-material-ui';
import { I18n } from '../utility/translations/Locale';

import AsyncImageAnimated from 'react-native-async-image-animated';


const Color  = require('../Constants/ConstantColor');

export default class EpisodesShows extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            selectedTabIndex:0,
            segTitleArray:[I18n.t('seg_tit_episodes'),I18n.t('seg_tit_shows'),I18n.t('seg_tit_mentions')],
            segBedgeArray:[0,0,0]
         }        
    }
   /* static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',        
        headerStyle: {
          backgroundColor: Color.COL_34_34_34
        },        
        headerLeft:<View style={{ flex: 1, paddingTop: 0, paddingLeft: 0, paddingRight: 0 ,backgroundColor : Color.COL_34_34_34}}>        
                        <TouchableOpacity style={styles.TouchButtonIconStyle} activeOpacity={0.5}> 
                            <Image 
                            source={require('../assets/images/ic_book_shows.png')} 
                            style={styles.ImageIconStyle} 
                            />                            
                            </TouchableOpacity>
                    </View>       
      })*/
        onClick()
        {
            Alert.alert('Done')
            this.setState({selectedTabIndex:1})
        }
        actionOnClear()
        {

        }

        A = [{"id":1,"name":"Shilpi","epi_name":"Game of Thrones","show_name":"The Bear and the Maiden Fair","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/inga.dolinski5412f2b3e215a.png","time":"75 minutes"},
        {"id":1,"name":"Chipli","epi_name":"Game of Thrones","show_name":"Unbowed, Unbent, Unbroken","episodes":"10","createddate":"10/10/2018","like":"600","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Shilpa","epi_name":"Game of Thrones","show_name":"The Wolf and the Lion","episodes":"10","createddate":"10/10/2018","like":"100","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/MsMattheis52275fc720136.png","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones","show_name":"The Bear and the Maiden Fair","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/inga.dolinski5412f2b3e215a.png","time":"75 minutes"},
        {"id":1,"name":"Chitra","epi_name":"Game of Thrones","show_name":"Unbowed, Unbent, Unbroken","episodes":"10","createddate":"10/10/2018","like":"600","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Kavita","epi_name":"Game of Thrones","show_name":"The Wolf and the Lion","episodes":"10","createddate":"10/10/2018","like":"100","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/MsMattheis52275fc720136.png","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones","show_name":"The Bear and the Maiden Fair","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/inga.dolinski5412f2b3e215a.png","time":"75 minutes"},
        {"id":1,"name":"Samu","epi_name":"Game of Thrones","show_name":"Unbowed, Unbent, Unbroken","episodes":"10","createddate":"10/10/2018","like":"600","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Champakali","epi_name":"Game of Thrones","show_name":"The Wolf and the Lion","episodes":"10","createddate":"10/10/2018","like":"100","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/MsMattheis52275fc720136.png","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones","show_name":"The Bear and the Maiden Fair","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/inga.dolinski5412f2b3e215a.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones","show_name":"Unbowed, Unbent, Unbroken","episodes":"10","createddate":"10/10/2018","like":"600","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Kavita","epi_name":"Game of Thrones","show_name":"The Wolf and the Lion","episodes":"10","createddate":"10/10/2018","like":"100","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/MsMattheis52275fc720136.png","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones","show_name":"The Bear and the Maiden Fair","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/inga.dolinski5412f2b3e215a.png","time":"75 minutes"},
        {"id":1,"name":"Arti","epi_name":"Game of Thrones","show_name":"Unbowed, Unbent, Unbroken","episodes":"10","createddate":"10/10/2018","like":"600","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Urmila","epi_name":"Game of Thrones","show_name":"The Wolf and the Lion","episodes":"10","createddate":"10/10/2018","like":"100","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/MsMattheis52275fc720136.png","time":"75 minutes"}] ;

        B = [{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"},{"id":1,"name":"Charil","epi_name":"Game of Thrones1","show_name":"Cripples, Bastards, and Broken Things","episodes":"10","createddate":"10/10/2018","like":"20","last_message":"exploit proactive functionalities","picture":"https://pickaface.net/gallery/avatar/pk_karthik556366573d429.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"},
        {"id":1,"name":"Charil","epi_name":"Game of Thrones3","show_name":"The Prince of Winterfell","episodes":"10","createddate":"10/10/2018","like":"1000","last_message":"exploit proactive functionalities","picture":"https://i.stack.imgur.com/gDpQu.jpg?s=328&g=1","time":"75 minutes"}] ;        
        
        sections = [
            { title: 'My Library Results', data: this.A },
            { title: 'Discover More', data: this.B }]


    render() {

        GetSectionListItem=(item)=>{

            Alert.alert(item)
        
          }

        return (           
                    <View style={{flex: 1,backgroundColor:Color.COL_10_14_25, marginTop : (Platform.OS) == 'ios' ? 0 : 0 }}>
                        <ImageBackground source={require('../assets/images/Bck.png')} style={{width:'100%',height:'100%'}}>
                            <View style={styles.SearchViewStyle}>
                                <View style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0 ,backgroundColor : Color.TRANSPARENT,width:50}}>        
                                    <TouchableOpacity style={styles.TouchButtonIconStyle} activeOpacity={0.5} disabled = {false}> 
                                        <Image 
                                            source={require('../assets/images/ic_book_shows.png')} 
                                            style={styles.ImageIconStyle} 
                                        />                            
                                    </TouchableOpacity>
                                </View> 
                                <View style={{backgroundColor : Color.TRANSPARENT,flex:1}}> 
                                    <Toolbar
                                            style={{ container: { elevation: 0, backgroundColor: 'transparent' } }}
                                            searchable={{
                                            onSubmitEditing: () => this.onSubmitEditing(),
                                            onChangeText: (input) => this.onChangeText(input),
                                            onSearchClosed: () => this.onSearchClosed(),
                                            autoFocus: true,
                                            placeholder: I18n.t('hint_search'),
                                            }}
                                            rightElement={<Text onPress={() => this.onRightElementPress()} style={styles.searchText}> {this.state.rightElementText}</Text>}
                                        />
                                </View> 
                            </View>                            
                            <View style={{ backgroundColor : Color.COL_10_14_25,height:66,flexDirection:'column'}}>
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
                                        tabTextStyle = {{color:Color.WHITE,fontFamily: "arial",fontSize: 18}}
                                        activeTabTextStyle = {{color:Color.YELLOW}}
                                                        />
                                </View>
                                <View style={{backgroundColor:Color.WHITE , height:1,marginTop:10}}></View>
                            </View>
                            {
                                this.state.selectedTabIndex <= 1?
                                    this.state.selectedTabIndex < 1 ?
                                    this.renderEpisodsItem()                                    
                                    : this.renderShowsItem()
                                : this.renderMentionItemFlateList()
                            }
                           </ImageBackground> 
                    </View>
        );
    }

    renderEpisodsItem() {            
        return (
            <SectionList 
                                            sections={this.sections}
                                            ItemSeparatorComponent={Separator}                      
                                            renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
                                            renderItem={ ({item}) => 
                                                <View style={styles.itemBlock}>
                                                <View>
                                                    <AsyncImageAnimated
                                                        source={{ uri: item.picture}}
                                                        placeholderSource={require('../assets/images/ic_placeholder_avatar.png')}
                                                        style={styles.itemImage}
                                                     />
                                                </View>
                                                <View style={styles.itemMeta}>
                                                    <Text style={styles.itemName}>{item.name}</Text>
                                                    <View style={styles.innerItemBlock}> 
                                                        <Text style={styles.innerItemTextBlock}>{item.episodes} of Episodes - {item.createddate} - {item.like} Likes</Text>                                                        
                                                     </View> 
                                                </View> 
                                                <View style={styles.bookMark}> 
                                                    <TouchableOpacity style={{height:48,width:20}} onPress= {()=>this.onPressClickMe()}>
                                                         <Image style={{height:35,width:20}} source={require('../assets/images/ic_bookmark.png')} />
                                                    </TouchableOpacity>
                                                </View>                                               
                                            </View>}
                                            keyExtractor={ (item, index) => index }
                                        />                                            
        ) 
      }

      renderShowsItem() {            
        return (
            <SectionList 
                    sections={this.sections}
                    ItemSeparatorComponent={Separator}                      
                    renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
                    renderItem={ ({item}) => 
                    <View style={styles.itemBlock}>
                        <View>
                        <AsyncImageAnimated
                                                        source={{ uri: item.picture}}
                                                        placeholderSource={require('../assets/images/ic_placeholder_avatar.png')}
                                                        style={styles.itemImage}
                                                     />
                            <Text style={styles.itemTime}>{item.time}</Text>                                        
                        </View>
                        <View style={styles.itemMeta}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemLastMessage}>{item.last_message}</Text>
                        </View> 
                        <View style={styles.bookMark}> 
                            <TouchableOpacity style={{height:48,width:20}} onPress= {()=>this.onPressClickMe()}>
                                <Image style={{height:35,width:20}} source={require('../assets/images/ic_bookmark.png')} />
                            </TouchableOpacity>                            
                        </View>                                               
                     </View>}
                    keyExtractor={ (item, index) => index }
            />                                           
        ) 
      }

      renderMentionItemFlateList() {            
        return (
            <FlatList 
                    keyExtractor={this._keyExtractor}
                    data={this.A}
                    renderItem={ ({item}) => 
                    <View style={styles.mentionItemBlock}>
                    <View style={{justifyContent:'flex-end'}}>
                        <AsyncImageAnimated
                                source={{ uri: item.picture}}
                                placeholderSource={require('../assets/images/ic_placeholder_avatar.png')}
                                style={styles.itemImage}
                            />                   
                    </View>
                    <View style={styles.mentionShowEpisodBlock}>
                        <View style={{paddingLeft:10}}>
                            <Text style={styles.mentionTitleName}>{item.epi_name}</Text>
                            <Text style={styles.mentionDesText}>{item.show_name}</Text>
                        </View>
                        <View style={styles.mentionPlayBlock}> 
                            <View style={{flex:1,backgroundColor:Color.TRANSPARENT}}>
                                <TouchableOpacity onPress= {()=>this.onPressClickMe()} style={{backgroundColor:Color.TRANSPARENT}} >
                                    <Image resizeMode="stretch" style={{height:50,width:'100%'}} source={require('../assets/images/ic_play_mentions.png')} />
                                </TouchableOpacity>
                            </View> 
                            <View style={styles.mentionbookMark}> 
                                <TouchableOpacity style={{height:48,width:20}} onPress= {()=>this.onPressClickMe()}>
                                    <Image style={{height:48,width:20}} source={require('../assets/images/ic_bookmark.png')} />
                                </TouchableOpacity>                            
                            </View>                                               
                        </View>
                    </View>                
                    </View>}
            />                                          
        )        
      }
      /*renderMentionItemSectionList() {            
        return (
            <SectionList 
            sections={this.sections}
            renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
            renderItem={ ({item}) => 
                <View style={styles.mentionItemBlock}>
                <View style={{justifyContent:'flex-end'}}>
                    <AsyncImageAnimated
                            source={{ uri: item.picture}}
                            placeholderSource={require('../assets/images/ic_placeholder_avatar.png')}
                            style={styles.itemImage}
                        />                   
                </View>
                <View style={styles.mentionShowEpisodBlock}>
                    <View style={{paddingLeft:10}}>
                        <Text style={styles.mentionTitleName}>{item.epi_name}</Text>
                        <Text style={styles.mentionDesText}>{item.show_name}</Text>
                    </View>
                    <View style={styles.mentionPlayBlock}> 
                        <View style={{flex:1,backgroundColor:Color.TRANSPARENT}}>
                            <TouchableOpacity onPress= {()=>this.onPressClickMe()} style={{backgroundColor:Color.TRANSPARENT}} >
                                <Image resizeMode="stretch" style={{height:50,width:'100%'}} source={require('../assets/images/ic_play_mentions.png')} />
                            </TouchableOpacity>
                        </View> 
                        <View style={styles.mentionbookMark}> 
                            <TouchableOpacity style={{height:48,width:20}} onPress= {()=>this.onPressClickMe()}>
                                <Image style={{height:48,width:20}} source={require('../assets/images/ic_bookmark.png')} />
                            </TouchableOpacity>                            
                        </View>                                               
                    </View>
                </View>                
            </View>}
            keyExtractor={ (item, index) => index }
        />                                           
        )        
      }*/
      onPressClickMe()
      {
          this.state.selectedTabIndex == 0 ?
            Alert.alert("Episodes")  : false

            this.state.selectedTabIndex == 1 ?
            Alert.alert("Shows")  : false

            this.state.selectedTabIndex == 2 ?
            Alert.alert("Mentions") : false
      }
            /**
         * Called when search was closed.
         */
        onSearchClosed() {
            this.setState({
            filterData: this.state.data,
            noData: false,
            })
        }
        /**
         * Called when action to close search was requested.
         */
        onSearchCloseRequested() {

        }
        /**
         * Called when search was opened.
         */
        onSearchPressed() {

        }
        /**
         * Called when user press submit button on hw keyboard
         */
        onSubmitEditing() {
            Alert.alert('text=')
        }
}
const Separator = () => (
    <View style={[styles.separatorContainer]} />
  );
const styles = StyleSheet.create(
    {
        SearchViewStyle:{   
            flexDirection:'row',                     
            height:64,
            marginTop:0,
            paddingTop:10,
            paddingLeft:0,
            backgroundColor:Color.COL_34_34_34,
            justifyContent:'space-between'
          },
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
            marginTop:0,
            paddingLeft:8,
            justifyContent:'center'
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
            justifyContent:'space-between',
            paddingBottom: 8,
            paddingTop: 10,
            paddingLeft: 12,
          },
          
          innerItemBlock: {
            flexDirection: 'row',
            justifyContent:'space-between',
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 0,
          },
          innerItemTextBlock: {
            fontSize: 12,            
            color: '#fff',
            textAlign: 'left',
            marginTop: 0,  
            flex:3,
            backgroundColor:Color.TRANSPARENT
          },
          innerItemDesBlock: {
            fontSize: 10,                        
            color: '#fff',
            textAlign: 'center',
            width:8,  
            backgroundColor:Color.TRANSPARENT,
            flex:1,
          },
          itemImage: {
            width: 80,
            height: 60,
            paddingLeft:20,
            borderRadius: 0,
            justifyContent:'center'
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
            paddingLeft: 10,
            paddingRight: 10,
            flex:1
          },
          itemName: {
            fontSize: 22,
            color: "white",
          },
          itemLastMessage: {
            fontSize: 14,
            color: "white",
          },
          bookMark:
          {
            backgroundColor:Color.TRANSPARENT,
            justifyContent:'center',
            width:35,
          },
          mentionItemBlock: {
            flexDirection: 'row',
            paddingBottom: 8,
            paddingTop: 5,
            paddingLeft: 5,
          },
          mentionPlayBlock: {
            flexDirection: 'row',
            paddingBottom: 0,
            paddingTop: 5,
            paddingLeft: 12,
            justifyContent:'space-between',
          },
          mentionShowEpisodBlock: {
            flexDirection: 'column',
            paddingBottom:0,
            paddingTop: 0,
            paddingLeft: 0,
            flex:1,
          },
          mentionTitleName: {
            fontWeight: 'bold',
            fontSize: 16,
            color: "white",
          },
          mentionItemImage: {
            width: 80,
            height: 55,
            paddingLeft:20,
            borderRadius: 0,
            justifyContent:'center'
          },
          mentionDesText: {
            fontSize: 12,
            color: Color.WHITE,
          },
          mentionbookMark:
          {
            backgroundColor:Color.TRANSPARENT,
            justifyContent:'center',
            paddingLeft:6,
            width:30,
          },
    }
)
