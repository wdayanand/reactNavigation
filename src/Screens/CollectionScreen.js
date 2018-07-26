import React, { Component } from 'react';
import CarouselPager from 'react-native-carousel-pager';

import { Dial } from 'react-native-dial';
//import Dial from '../Dial.js'
import { Toolbar } from 'react-native-material-ui';
import { BackHandler } from 'react-native'
import MusicFiles from 'react-native-get-music-files';
const Color = require('../Constants/ConstantColor');



import {
  StyleSheet, Alert,
  Text,
  Button,
  View,
  Image, TouchableOpacity, alert, Dimensions, ImageBackground
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      title1: 'Episode Title 1',
      title2: 'sub title',
      array_music: ["Music 1", "Music 2", "Music 3", "Music 4", "Music 5", "Music 6"],
      array_MusicImages: ["../assets/images/Music.png", "../assets/images/Music.png", "../assets/images/rose.png", "../assets/images/dummy.png", "../assets/images/Music.png", "../assets/images/Music.png"],
      value: '0',
      angle: 0,
      page: 0,
      array_Localmusic: []
    }
  }
  state = {
    selected: 0
  }

  handleIndexChange = (index) => {

    if (index == 1) {
      const { navigate } = this.props.navigation
      navigate("SearchResult", {})
      //   MusicFiles.getAll({
      //     blured : true, // works only when 'cover' is set to true
      //     artist : true,
      //     duration : true, //default : true
      //     cover : true, //default : true,
      //     genre : true,
      //     title : true,
      //     cover : true,
      //     path:true,
      //     SongID: true,
      //     Url:true,
      //     minimumSongDuration : 10000 ,// get songs bigger than 10000 miliseconds duration,
      //     fields : ['title','albumTitle','genre','lyrics','artwork','duration','blured','artist','cover','path','url'] // for iOs Version
      // }).then(tracks =>

      //   {
      //     // do your stuff...
      //     this.setState({
      //       ...this.state,array_Localmusic:tracks
      //     })


      // }).catch(error => 
      //   {
      //     // catch the error
      // })
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

  onClickShowTitle() {
    this.props.navigation.navigate('ShowsTitle')
  }

  onPageChange(page) {

    this.setState.page = page
    let authToken = this.state.array_music[page];
    //page.toString()
    this.setState(
      {
        title1: 'Episode Title' + ' ' + authToken,
        title2: 'Sub Title' + ' ' + authToken
      }
    );
  }

  onValueChange(num, radius) {
    var dif = this.state.angle - num
    console.info("num : " + num, " radius : " + radius, " dif : " + dif)
    if (Math.abs(dif) >= 90) {// && Math.abs(dif) <= 100) {
      if (dif < 0) {
        console.info("Next : " + this.state.page)
        if (this.state.page <= this.state.array_music.length) {
          this.carousel.goToPage(this.state.page + 1);
          this.setState({ page: this.state.page + 1 })
          let authToken = this.state.array_music[this.state.page];
        }
      }
      else if (dif > 0) {
        console.info("Prev : " + this.state.page)
        if ((this.state.page) < 0) {
          this.setState({ page: 0 })
          this.carousel.goToPage(0);
        }
        else {
          this.setState({ page: this.state.page - 1 })
          this.carousel.goToPage(this.state.page - 1);
        }
        let authToken = this.state.array_music[this.state.page];
      }
      this.setState({ angle: num })

    }
  }

  render() {
    var musicArray = this.state.array_music
    const { navigate } = this.props.navigation
    return (
      <View style={style.backgroundContent}>
            <ImageBackground source={require('../assets/images/Bck.png')} style={{width:'100%',height:'100%'}}>
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
        {/* <View style={style.outerSegmentcontener}>
          <SegmentedControlTab style={style.segmentContent}
            values={['Cloud', 'Device']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View> */}


        <View style={style.mainContainer}>

          <CarouselPager onPageChange={(page) => this.onPageChange(page)} ref={ref => this.carousel = ref} initialPage={this.state.page} pageStyle={{ backgroundColor: '#fff' }}>
            {musicArray.map((item, key) =>
              (
                // <View key={key}><Text>{item}</Text></View>
                <View key={key} style={{ alignItems: 'center', }}>
                <ImageBackground style={{  width: '100%', height: '100%' }} source={require("../assets/images/Music.png")} />
                <Text style={{ marginBottom: 10, color: 'black', width: 50 }}>item
                </Text>
                </View>


              )
            )}

          </CarouselPager>
        </View>
        <View style={style.bottomcontainer}>

          <View style={style.circleComponent}>
            <View style={{ width: this.state.screenWidth - 200, margin: 5, padding: 0, }}>
              <Text style={{ margin: 1, color: Color.COL_pastel_blue, alignSelf: 'center' ,fontSize:20}}>{this.state.title1}</Text>
            </View>
            <View style={{
              width: 130, height: 130, marginTop: 0,
            }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Dial
                  style={{ width: 120, height: 120, marginBottom: 30, backgroundColor: 'gray' }}
                  maximumValue={3600}
                  step={360 / 50}
                  onValueChange={num => this.onValueChange(num)}>
                  <Image  resizeMode='stretch' style={{ width: 120, height: 120 }} source={require('../assets/images/img_Circle.png')} />
                </Dial>
              </View>
            </View>


          </View>
          <View style={style.bottomContenerLeft}>
            <TouchableOpacity>
              <Image style={style.imageContainer2} source={require("../assets/images/dusbin.png")} />
              <Text style={{paddingTop:5,color:Color.WHITE}}>Remove</Text>
            </TouchableOpacity>
          </View>

          <View style={style.bottomContenerRight}>
            <TouchableOpacity onPress={() => this.onClickShowTitle()}>
              <Image style={style.imageContainer} source={require("../assets/images/dotdot.png")} />
              <Text style={{paddingTop:5,color:Color.WHITE}}>More</Text>


            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
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
        width: 20,
        height: 20,
        alignSelf:'center'

      },
    imageContainer2:
      {
        width: 20,
        height: 20,
        alignSelf:'center'
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
        alignItems: 'center'

      }
    ,
    bottomContenerLeft:
      {

        width: 60,
        height: 40,
        marginBottom: 5,
        position: 'absolute',
        bottom: 20,
        marginLeft: 25, left: 1,
        alignItems: 'center',





      },
    bottomContenerRight:
      {
        width: 40,
        height: 40,
        marginBottom: 5,
        position: 'absolute',
        bottom: 20,
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