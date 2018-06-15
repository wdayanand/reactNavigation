/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { scale, moderateScale, verticalScale } from '../utility/scaling';
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
    this.state = { selectedCategory: { name: 'What do you want to learn ?' }, data: [{ title: 'Learning', subItem: [{ id: '1', name: 'Business' }, { id: '2', name: 'History' }] }, { title: 'Entertainment', subItem: [{ id: '1', name: 'Narrative' }] }, { title: 'Bollywood', subItem: [{ id: '1', name: 'sub1' }, { id: '2', name: 'sub2' }] }, { title: 'b', subItem: [{ id: '1', name: 'sub1' }] }] }
  }
  onClick() {
    const { navigate } = this.props.navigation
    navigate("Screen4", {})

  }
  _onItemClick = (selectedItem) => {

   
    this.setState({selectedCategory:{name:selectedItem.title}})
  };
  _onButtonClick = () => {

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
            data={this.state.data}
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
              <Text style={styles.buttonText}>Stumble-a-pad</Text>
              <View
                style={styles.buttonLine}
              /></View>
          </TouchableOpacity>
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
    color: "white", alignSelf: 'center'
  },
  categoryContentContainer: {
    height: moderateScale(215),
    backgroundColor: '#2D2B66', overflow: 'hidden',
    marginLeft: moderateScale(70), marginRight: moderateScale(70), marginBottom: moderateScale(60),
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30)
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
