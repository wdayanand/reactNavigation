/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { scale, moderateScale, verticalScale } from '../utility/scaling';
import { Toolbar } from 'react-native-material-ui';
import { I18n } from '../utility/translations/Locale';
import { getCategory } from '../services/api'
import Spinner from 'react-native-loading-spinner-overlay';
import {
  StyleSheet,

  Image,
  TouchableOpacity,
  Text,
  FlatList,
  View, Alert
} from 'react-native';



export default class Screen3 extends Component {


  constructor(props) {
    super(props);
    this.state = { visible: false, rightElementText: I18n.t('lbl_search'), selectedCategory: { name: I18n.t('init_category_selection_txt') }, data: [{ title: 'Learning', subItem: [{ id: '1', name: 'Business' }, { id: '2', name: 'History' }] }, { title: 'Entertainment', subItem: [{ id: '1', name: 'Narrative' }] }, { title: 'Bollywood', subItem: [{ id: '1', name: 'sub1' }, { id: '2', name: 'sub2' }] }, { title: 'b', subItem: [{ id: '1', name: 'sub1' }] }] }
    this.state.filterData = this.state.data

  }
  componentDidMount() {
    //

    this.didBlurSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.setState({ visible: true })
        getCategory()
          .then((responseJson) => {
            this.setState({ visible: false })
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

  searchText = (e) => {

  }
  /**
          * Called when search text was changed.
          */
  onChangeText(e) {
    let text = e.toLowerCase()
    let fullList = this.state.data;
    let filteredList = fullList.filter((item) => { // search from a full list, and not from a previous search results list
      if (item.title.toLowerCase().match(text))
        return item;
    })
    if (!text || text === '') {
      this.setState({
        filterData: fullList

      })
    } else if (!filteredList.length) {
      // set no data flag to true so as to render flatlist conditionally
      this.setState({
        filterData: []
      })
    }
    else if (Array.isArray(filteredList)) {
      this.setState({

        filterData: filteredList
      })
    }
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
  onClick() {
    const { navigate } = this.props.navigation
    navigate("Home", {})

  }
  _onItemClick = (selectedItem) => {


    this.setState({ selectedCategory: { name: selectedItem.title } })
  };
  _onButtonClick = () => {
    const { navigate } = this.props.navigation
    navigate("Home", {})
  };
  onRightElementPress = () => {
    console.log('log', 'asds')
  };
  renderSeparator = () => (

    <View
      style={styles.itemRowSeprator}
    />
  );
  renderListItem(item, index) {
    var fLen = item.subItem.length;
    var sybItems = item.subItem;
    var subItemStr = '';
    for (i = 0; i < fLen; i++) {
      if (i == 0)
        subItemStr += sybItems[i].name;
      else
        subItemStr += ',' + sybItems[i].name;
    }
    return (

      <TouchableOpacity onPress={() => this._onItemClick(item)}>
        <View style={styles.itemRowContianer}>
          <Image style={styles.podImgIcon} source={require('../assets/images/tag.png')} />
          <View style={{ marginLeft: moderateScale(15) }}>
            <Text style={styles.itemRowTitle}>
              {item.title}
            </Text>
            <Text style={styles.itemRowsubTitle}>
              {subItemStr}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (

      <View style={styles.container}>
        <Spinner animation='fade' visible={this.state.visible} textStyle={{ color: '#FFF' }} />
        <View style={{ alignSelf: 'stretch', position: 'absolute', top: 0, width: require('Dimensions').get('window').width }}>
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
        <Text style={styles.appTitle}>
          Podsource
            </Text>
        <View style={styles.categoryContentContainer}>
          <View style={styles.selectedCategory}>
            <Text style={styles.selectedCategoryText}>
              {this.state.selectedCategory.name}
            </Text>
            <Image style={styles.podIconImg} source={require('../assets/images/podicon.png')} />
          </View>
          <FlatList
            data={this.state.filterData}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item, index }) => this.renderListItem(item, index)}

          />
        </View>
        <View style={{
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={this._onButtonClick}>
            <View style={styles.buttonContianer}>
              <View
                style={styles.buttonLine}
              />
              <Text style={styles.buttonText}>{I18n.t('btn_stumbe_pad')}</Text>
              <View
                style={styles.buttonLine}
              /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.favoriteContianer}>
          <Image style={styles.bottomPodIconImg} source={require('../assets/images/podicon.png')} />
          <Text style={styles.favoriteText}>{I18n.t('lbl_my_favorite')}</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#150030',
  },
  searchText: {
    color: 'white',
    alignSelf: 'center'
  },
  podImgIcon: {
    width: moderateScale(25),
    height: moderateScale(35),
    alignSelf: 'center'
  },
  itemRowSeprator: {
    backgroundColor: '#3D3890',
    height: 0.5,
  },
  itemRowTitle: {
    color: "white",
    fontWeight: 'bold',
    fontSize: moderateScale(15)
  },
  itemRowsubTitle: {
    color: "#929ADD"
  },
  itemRowContianer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    padding: moderateScale(20)
  },
  buttonContianer: {
    flexDirection: 'column',
    alignSelf: 'stretch'
  },
  buttonText: {
    margin: moderateScale(15),
    color: 'white'
  },
  buttonLine: {
    backgroundColor: '#3D3890',
    height: 1,
  },
  podIconImg: {
    position: 'absolute',
    right: moderateScale(15),
    width: moderateScale(25),
    height: moderateScale(25),
    alignSelf: 'center'
  },
  bottomPodIconImg: {

    width: moderateScale(25),
    height: moderateScale(25),
    alignSelf: 'center'
  },
  favoriteContianer: {
    flexDirection: 'row',
    position: 'absolute', bottom: 5,
    left: 5
  },
  favoriteText: {
    color: 'white',
    alignSelf: 'center',
    marginLeft: moderateScale(10)
  },
  appTitle: {
    marginBottom: moderateScale(60),
    fontWeight: 'bold',
    fontSize: moderateScale(45),
    color: "white",
    alignSelf: 'center'
  },
  selectedCategory: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#3D3890',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    paddingTop: moderateScale(15),
    paddingBottom: moderateScale(15),

  },
  selectedCategoryText: {
    color: "white", alignSelf: 'center',
    marginRight: moderateScale(10),
  },
  categoryContentContainer: {
    height: moderateScale(210),
    backgroundColor: '#2D2B66', overflow: 'hidden',
    marginLeft: moderateScale(60), marginRight: moderateScale(60), marginBottom: moderateScale(60),
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30)
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});


