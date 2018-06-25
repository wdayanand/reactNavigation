import React, { Component } from 'react';
import CarouselPager from 'react-native-carousel-pager';

import { Dial } from 'react-native-dial';
//import Dial from '../Dial.js'
import { Toolbar } from 'react-native-material-ui';
import { BackHandler } from 'react-native'
import MusicFiles from 'react-native-get-music-files';


import {
  StyleSheet, Alert,
  Text,
  Button,
  View,
  Image, TouchableOpacity, alert, Dimensions,ImageBackground
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title1: 'title 1',
      title2: 'sub title',
      array_music: ["Music 1", "Music 2", "Music 3", "Music 4", "Music 5", "Music 6"],
      array_MusicImages:["../assets/images/Music.png","../assets/images/Music.png","../assets/images/Music.png","../assets/images/Music.png","../assets/images/Music.png","../assets/images/Music.png"],
      value: '0',
      angle: 0,
      page: 0,
      array_Localmusic:[]
    }
  }
  state = {
    selected: 0
  }

  handleIndexChange = (index) => {
    if(index == 1)
    {
      MusicFiles.getAll({
        blured : true, // works only when 'cover' is set to true
        artist : true,
        duration : true, //default : true
        cover : true, //default : true,
        genre : true,
        title : true,
        cover : true,
        path:true,
        SongID: true,
        Url:true,
        minimumSongDuration : 10000 ,// get songs bigger than 10000 miliseconds duration,
        fields : ['title','albumTitle','genre','lyrics','artwork','duration','blured','artist','cover','path','url'] // for iOs Version
    }).then(tracks =>
      
      {
        // do your stuff...
        this.setState({
          ...this.state,array_Localmusic:tracks
        })

        
    }).catch(error => 
      {
        // catch the error
    })
    }
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  appClose() {
    BackHandler.exitApp()

  }

  /**
     * Called when search text was changed.
            */


  onChangeText(input) {

  }

  /**
  * Called when search was closed.
  */
  onSearchClosed() {

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

  onPageChange(page) {

    this.setState.page = page
    let authToken = this.state.array_music[page];
    //page.toString()
    this.setState(
      {
        title1: 'Title' + ' ' + authToken,
        title2: 'Sub Title' + ' ' + authToken
      }
    );
  }

  onValueChange(num) {
    console.info(""+num)
    var dif = this.state.angle - num
    if (Math.abs(dif) >= 45) {
      if (dif > 0) {
        if (this.state.array_music.length >= this.state.page + 1) {
          this.carousel.goToPage(this.state.page + 1);
          this.state.page = this.state.page + 1
          let authToken = this.state.array_music[this.state.page];
          // this.setState(
          //   {
          //     title1: this.state.page.toString() + " " + authToken,
          //     title2: (num - this.state.angle).toString()
          //   })
        }
      }
      else if (dif<0)
      {
        this.state.page = this.state.page - 1
          this.carousel.goToPage(this.state.page);
          let authToken = this.state.array_music[this.state.page];
      }
    }
    


    this.state.angle = num
  }

  render() {
    var musicArray = this.state.array_music
    const { navigate } = this.props.navigation
    return (
      <View style={style.backgroundContent}>
        <Toolbar
          leftElement="close"
          centerElement="Podsource"
          onLeftElementPress={() => this.appClose()}
          searchable={{
            onSubmitEditing: () => this.onSubmitEditing(),
            onChangeText: (input) => this.onChangeText(input),
            autoFocus: true,
            placeholder: 'Search',
          }}
        />
        <View style={style.outerSegmentcontener}>
          <SegmentedControlTab style={style.segmentContent}
            values={['Cloud', 'Device']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View>


        <View style={style.mainContainer}>
          <CarouselPager onPageChange={(page) => this.onPageChange(page)} ref={ref => this.carousel = ref} initialPage={this.state.page} pageStyle={{ backgroundColor: '#fff' }}>
            {musicArray.map((item, key) =>
              (
               // <View key={key}><Text>{item}</Text></View>
               <View key={key} style={{alignItems: 'center',}}><ImageBackground style={{flex:1,width:120,height:120}} source={require("../assets/images/Music.png")}/><Text style={{marginBottom:10,color:'black',width:50}}>item</Text></View>

              
              )
            )}

          </CarouselPager>
        </View>
        <View style={style.bottomcontainer}>

          <View style={style.circleComponent}>
            <View style={{ width: this.state.screenWidth - 200, margin: 5, padding: 0, backgroundColor: '#5E486B' }}>
              <Text style={{ margin: 1, color: 'white', alignSelf: 'center' }}>{this.state.title1}</Text>
              <Text style={{ margin: 1, color: 'white', alignSelf: 'center' }}>{this.state.title2}</Text>
            </View>
            <View style={{
              width: 130, height: 130, marginTop: 0,
            }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Dial
                  style={{ width: 120, height: 120, marginBottom: 30, backgroundColor: 'gray' }}
                  maximumValue={3600}
                  step={360/50}
                  onValueChange={num => this.onValueChange(num)}>
                  <Image style={{ width: 120, height: 120 }} source={require('../assets/images/img_Circle.png')} />
                </Dial>
              </View>
            </View>


          </View>
          <View style={style.bottomContenerLeft}>
            <TouchableOpacity>
              <Image style={style.imageContainer2} source={require("../assets/images/dusbin.png")} />
            </TouchableOpacity>
          </View>

          <View style={style.bottomContenerRight}>
            <TouchableOpacity>
              <Image style={style.imageContainer} source={require("../assets/images/magicLamp.png")} />

            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
var str_width = Dimensions.get('window').width;

const style = StyleSheet.create(
  {

    circleComponent:
    {
      width: str_width,
      height: 200,
      marginTop: 0,
      alignItems: 'center'
      , justifyContent: 'center',

    }
    ,
    imageContainer:
    {
      width: 40,
      height: 40
    },
    imageContainer2:
    {
      width: 30,
      height: 30
    }
    ,
    mainContainer:
    {
      flex: 1,
      // backgroundColor:'red',
      marginTop: 20,
      height: 100,
      width: str_width,
    }
    ,
    sliderWidth:
    {
      width: str_width,

    },
    itemWidth:
    {
      width: str_width - 40,

    }
    ,

    bottomcontainer:
    {

      width: str_width,
      height: 200,
      marginTop: 20,
    }
    ,
    bottomContenerLeft:
    {

      width: 40,
      height: 40,
      marginBottom: 5,
      position: 'absolute',
      bottom: 5,
      marginLeft: 25, left: 1,
      alignItems: 'center',





    },
    bottomContenerRight:
    {
      width: 40,
      height: 40,
      marginBottom: 5,
      position: 'absolute',
      bottom: 5,
      right: 1,
      alignItems: 'center',


      marginRight: 25,


      // width:20,
      // height:20
    }
    ,
    backgroundContent:
    {
      backgroundColor: 'black',
      flex: 1, //alignItems: 'stretch', padding: 10,
      //justifyContent: 'center', 
      alignItems: 'center',
    },

    outerSegmentcontener:
    {
      width: 200,
      height: 30,
      marginTop: 20,

    },
    segmentContent:
    {
      width: 200,
      height: 30,
    }

  }
);