import React, { Component } from 'react';
import GridView from 'react-native-super-grid';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,ImageBackground,Alert,TouchableOpacity
} from 'react-native';
const Color = require('../Constants/ConstantColor');
import { Toolbar } from 'react-native-material-ui';
import { BackHandler } from 'react-native'
import { scale, moderateScale, verticalScale } from '../utility/scaling';

import { I18n } from '../utility/translations/Locale';
import img1 from'../assets/images/newspaper.png'
import img2 from'../assets/images/ic_book_shows.png'
import img3 from'../assets/images/Sports.png'
import img4 from'../assets/images/Business.png'
import img5 from'../assets/images/Entertainment.png'
import img6 from'../assets/images/Art.png'
import img7 from'../assets/images/comedy.png'
import img8 from'../assets/images/Health.png'
import img9 from'../assets/images/worldwide.png'
import img10 from'../assets/images/musicLine.png'
import img11 from'../assets/images/tech.png'
import img12 from'../assets/images/airplane.png'
import img13 from"../assets/images/rose.png"
import img14 from"../assets/images/add.png"



var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;
var MOVIES_PER_ROW = 3;


const data = [
  {"id": 'a',"name":'News', "image": img1 },
  {"id": 'b',"name":'Entertainment', "image": img2 },
  {"id": 'c',"name":'Sports', "image": img3 },
  {"id": 'd',"name":'Business', "image": img4 },
  {"id": 'e',"name":'Food/Drink', "image": img5 },
  {"id": 'f',"name":'Art', "image": img6 },
  {"id": 'a',"name":'Comedy', "image": img7 },
  {"id": 'b',"name":'Health', "image": img8 },
  {"id": 'c',"name":'Culture', "image": img9 },
  {"id": 'd',"name":'Music', "image": img10 },
  {"id": 'e',"name":'Tech', "image": img11 },
  {"id": 'f',"name":'Travel', "image": img12 },
  {"id": 'f',"name":'Fashion', "image": img13 },
  {"id": 'f',"name":'Edit', "image": img14 },


];

class Movie extends React.Component {
  onClick(data)
  {
    Alert.alert(data.name)

  }


  render() {

      return (
        <TouchableOpacity  onPress={() => this.onClick(this.props.movie)}>

        <View style={styles.movie} >
          <Image
          source={this.props.movie.image}
           // source={{require(this.props.movie.value)}  //{{uri: this.props.movie.posters.thumbnail}}
            style={styles.thumbnail}
          >
          </Image> 
          
          <View >
            <Text style={styles.title}>{this.props.movie.name}</Text>
          </View>
        </View>
        </TouchableOpacity>
      );
  }
}

export default class HelloWorldApp extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      loaded: false,
    }
  }

  componentDidMount() {
    this.setState({
      dataSource: data,
      loaded: true,
    });
   // this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: responseData.movies,
          loaded: true,
        });
      })
      .done();
  }
  /**
     * Called when search text was changed.
            */

           appClose() {
            const { goBack } = this.props.navigation;
            goBack('CollectionScreen');
            BackHandler.exitApp()
        
          }

  onChangeText(input) {

}

/**
* Called when search was closed.
*/
onSearchClosed() {
    const { goBack } = this.props.navigation;
    goBack('CollectionScreen');
}
/**
* Called when action to close search was requested.
*/
onSearchCloseRequested() {
    const { goBack } = this.props.navigation;
            goBack('CollectionScreen');

}
/**
* Called when search was opened.
*/
onSearchPressed() {

}

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
     
      <ImageBackground source={require('../assets/images/Bck1.png')} style={{width:'100%',height:'100%'}}>
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
      <Text style={styles.ScreenTitle}>Discover</Text>
      <Image style={{width:'100%',height:10}} source={require('../assets/images/sep.png')}></Image>
      <GridView 
        items={this.state.dataSource}
        itemsPerRow={MOVIES_PER_ROW}
        renderItem={this.renderItem}
        itemDimension={80}
        style={styles.listView}
        
      />
    </ImageBackground>

    );
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderItem(item) {
      return <Movie movie={item} />
  }
  topSearchBar() {
    return (
        <View style={{padding:10,justifyContent:'center',flex:1,}}>
            <View style={styles.SearchBarStyle}>
                <View style={{padding:2,justifyContent:'center'}}>
                    <SearchBar style={{paddingTop:0}}
                                noIcon
                                inputStyle={{backgroundColor:Color.TRANSPARENT,alignSelf:'center'}}
                                containerStyle={{backgroundColor:Color.TRANSPARENT,color:Color.TRANSPARENT,borderBottomColor:Color.TRANSPARENT,borderTopColor:Color.TRANSPARENT}}
                                placeholder='What are you doing' />
                 </View>
                <View style={{position:'absolute',padding:10,right:0,backgroundColor:Color.TRANSPARENT}}>
                    <Image resizeMode={'stretch'} style={{height:22,width:20,justifyContent:'center'}} source={require('../assets/images/ic_search.png')} />
                </View>
           </View>  
        </View>                                            
    ) 
  }

}

var styles = StyleSheet.create({
  movie: {
    height: 100,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
 
  },
  title: {
    color:Color.WHITE,
    fontSize: 10,
    width: 80,
    textAlign: 'center',
    paddingTop: 10,
    
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 40,
    height: 40,
  },
  listView: {
    paddingTop: 40,
    backgroundColor: Color.TRANSPARENT,
   
  },
  ScreenTitle:
  {
    paddingLeft: 20,
    fontSize: 50,
    color:Color.YELLOW,
    paddingTop: 40,

  }
});

