import React, { Component } from 'react';
import GridView from 'react-native-super-grid';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,ImageBackground,Alert
} from 'react-native';
const Color = require('../Constants/ConstantColor');
import { I18n } from '../utility/translations/Locale';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;
var MOVIES_PER_ROW = 3;
const data = [
  {id: 'a',name:'News', value: '../assets/images/newspaper.png'},
  {id: 'b',name:'Entertainment', value: '../assets/images/ic_book_shows.png'},
  {id: 'c',name:'Sports', value: '../assets/images/newspaper.png'},
  {id: 'd',name:'Business', value: '../assets/images/books.png'},
  {id: 'e',name:'Food/Drink', value: '../assets/images/newspaper.png'},
  {id: 'f',name:'Art', value: '../assets/images/newspaper.png'},
  {id: 'a',name:'Comedy', value: '../assets/images/newspaper.png'},
  {id: 'b',name:'Health', value: '../assets/images/newspaper.png'},
  {id: 'c',name:'Culture', value: '../assets/images/newspaper.png'},
  {id: 'd',name:'Music', value: '../assets/images/newspaper.png'},
  {id: 'e',name:'Tech', value: '../assets/images/newspaper.png'},
  {id: 'f',name:'Travel', value: '../assets/images/newspaper.png'},
  {id: 'f',name:'Fashion', value: '../assets/images/newspaper.png'},

];

class Movie extends React.Component {
  render() {
      return (
        <View style={styles.movie} >
          {<Image
           source={require('../assets/images/newspaper.png')}
            //source={{uri: this.props.movie.value}}  //{{uri: this.props.movie.posters.thumbnail}}
            style={styles.thumbnail}
          /> }
          <View >
            <Text style={styles.title}>{this.props.movie.name}</Text>
          </View>
        </View>
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

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ImageBackground source={require('../assets/images/Bck1.png')} style={{width:'100%',height:'100%'}}>
      <GridView style={{paddingLeft:20,paddingRight:20,backgroundColor:Color.TRANSPARENT}}
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
    width: 50,
    height: 50,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: Color.TRANSPARENT,
  },
});

//AppRegistry.registerComponent('GridViewExample', () => AwesomeProject);

// //{
  
// onClick()
// {
// //this.props.navigation.navigate('ShowsTitle')
// }
// render() {
// return (
// <View>
// <ImageBackground source={require('../assets/images/Bck1.png')} style={{width:'100%',height:'100%'}}>


// </ImageBackground>
// </View>
// );
// }
// }
// const styles = StyleSheet.create(
// {
// buttonStyle:{
// paddingTop : 100
// }
// }
// )
