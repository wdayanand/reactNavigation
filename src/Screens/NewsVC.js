import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import {View,Button,StyleSheet,Alert,TouchableOpacity,Image,Platform,SectionList,Text,FlatList,ImageBackground} from 'react-native'
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

    
        // A = [{"id":"1"}] ;
        // sections = [
        //     { title: 'My Library Results', data: this.A }
        //     ]

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
        {"id":1,"name":"Charil","epi_name":"Game of Thrones2","show_name":"What Is Dead May Never Die","episodes":"10","createddate":"10/10/2018","like":"60","last_message":"exploit proactive functionalities","picture":"https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png","time":"75 minutes"}] ;        
        
        sections = [
            { title: 'My Library Results', data: [this.A] },
            { title: 'Discover More', data: [this.B] },
            { title: 'Not Bed', data: [this.A] },
            { title: 'Latest', data: [this.B] },
            { title: 'Good', data: [this.A] },
            { title: 'Bakwas', data: [this.B] }]



    render() {

        GetSectionListItem=(item)=>{

            Alert.alert(item)
        
          }

        return (           
                    <View style={{flex: 1,backgroundColor:Color.TRANSPARENT, marginTop : (Platform.OS) == 'ios' ? 0 : 0 }}>
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
                                            style={{ container: { elevation: 0, backgroundColor: Color.TRANSPARENT } }}
                                            searchable={{
                                            onSubmitEditing: () => this.onSubmitEditing(),
                                            onChangeText: (input) => this.onChangeText(input),
                                            onSearchClosed: () => this.onSearchClosed(),
                                            autoFocus: true,
                                            placeholder: I18n.t('hint_search_pod'),
                                            }}
                                            rightElement={<Text onPress={() => this.onRightElementPress()} style={styles.searchText}> {this.state.rightElementText}</Text>}
                                        />
                                </View> 
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'center'}}>
                                    <View style={styles.headerStyle}>
                                        <View style={{paddingLeft:15,paddingVertical:28,flexDirection:'row',justifyContent:'space-between',backgroundColor:Color.TRANSPARENT}}>
                                            <Image 
                                                source={require('../assets/images/ic_book_shows.png')} 
                                                style={{height : 31 , width:31}} />
                                            <Text style={{color:Color.YELLOW,fontWeight: 'bold',textAlign: 'center',fontSize: 26,height:30}}>Top Shows</Text>
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'flex-start',backgroundColor:Color.TRANSPARENT}}>
                                            <Image 
                                                resizeMode={'stretch'}
                                                source={require('../assets/images/ic_bookmark.png')} 
                                                style = {{height : 32 , width:38}} />
                                            <Text style={{color:Color.WHITE,paddingHorizontal:10,paddingTop:5,fontSize: 12}}> Top Shows </Text>
                                        </View>
                                    </View>
                                    <Image 
                                            source={require('../assets/images/sep.png')} 
                                            style={{height:8}} resizeMode = {'stretch'} 
                                    /> 
                            </View>

                            <View style={styles.headerFeaturedStyle}>
                                    <TouchableOpacity style={{backgroundColor:Color.COL_210_40_86,width:125,height:65,borderRadius:3,justifyContent:'flex-start'
                                            ,shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.60}} activeOpacity={0.5} disabled = {false}> 
                                        <View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor:Color.COL_244_207_63,width:125,height:65,borderRadius:4,justifyContent:'flex-end'
                                                ,shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.60}} activeOpacity={0.5} disabled = {false}> 
                                        <View>
                                        </View>
                                    </TouchableOpacity>                                
                            </View>
                            {
                                this.renderEpisodsItem()
                            }                                                       
                           </ImageBackground> 
                    </View>
        );
    }

    renderEpisodsItem() {            
        return (
            <SectionList 
                bounces={false}
                sections={this.sections}
                ItemSeparatorComponent={Separator}                      
                renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
                renderItem={ ({item}) => 
                        this.renderMentionItemFlateList(item)
                }
                keyExtractor={ (item, index) => index }
                />                                            
        ) 
      }

    renderMentionItemFlateList(item) {            
        return (
            <View style={{backgroundColor:Color.TRANSPARENT}}>
                <FlatList                                                 
                        keyExtractor={this._keyExtractor}
                        data={item}
                        horizontal={true}
                        renderItem={ ({item}) => 
                        <View style={styles.childSectionCard}>
                            <View style={styles.childCard}>
                                <AsyncImageAnimated
                                    source={{ uri: item.picture}}
                                    placeholderSource={require('../assets/images/ic_placeholder_avatar.png')}
                                    style={styles.itemImage}
                                />                                  
                                <Text style={styles.childCardTitle}> { item.show_name.toUpperCase() } </Text>
                             </View>                               
                        </View>
                        }
                />
            </View>                                         
        )      
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
          headerStyle:{   
            flexDirection:'row',                     
            height:64,
            paddingTop:0,
            paddingLeft:0,
            backgroundColor:Color.TRANSPARENT,
            justifyContent:'space-between'
          },
          headerFeaturedStyle:{   
            flexDirection:'row',              
            height:80,
            paddingRight:5,
            paddingLeft:5,
            paddingTop:5,
            paddingBottom:5,  
            alignSelf:'center',
            justifyContent:'space-between',
            backgroundColor:Color.TRANSPARENT,     
            width:275       
          },
          childSectionCard:{   
            flex:1,
            paddingTop:10,
            paddingLeft:10,
            paddingRight:10,
            paddingBottom:10,
            backgroundColor:Color.TRANSPARENT,
            justifyContent:'space-between'
          },  
          itemImage: {
            width: 100,
            height: 100,
            paddingLeft:20,            
            justifyContent:'center',
            borderRadius: 6
          },     
          childCard:{   
            flex:1,
            paddingTop:0,
            paddingLeft:0,
            paddingRight:0,
            paddingBottom:0, 
            backgroundColor:Color.TRANSPARENT                       
          },
        ImageIconStyle:{
          width:40,
          height:40,
          marginTop:0,
          paddingLeft:0,
        },
        TouchButtonIconStyle:{
            width:35,
            height:40,
            marginTop:0,
            paddingLeft:8,
            justifyContent:'center'
          },         
          SectionHeaderStyle:{ 
            backgroundColor : Color.COL_28_75_144,
            padding: 10,
            color: Color.YELLOW,
            textAlign: 'left', // <-- the magic
            fontSize: 20,
            marginTop: 0,                    
          },
          childCardTitle:{ 
            width:100,
            backgroundColor : Color.TRANSPARENT,            
            padding: 3,
            color: Color.WHITE,
            fontWeight: 'bold',
            textAlign: 'center', // <-- the magic
            fontSize: 14,
            marginTop: 0,                    
          },
    }
)
