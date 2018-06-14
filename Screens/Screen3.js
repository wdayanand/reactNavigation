/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  View
} from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ title: 'Learning', subItem: [{ id: '1', name: 'Business' }, { id: '2', name: 'History' }] }, { title: 'Entertainment', subItem: [{ id: '1', name: 'Narrative' }] }, { title: 'Bollywood', subItem: [{ id: '1', name: 'sub1' }, { id: '2', name: 'sub2' }] }, { title: 'b', subItem: [{ id: '1', name: 'sub1' }] }] }
  }
  onClick() {
    const { navigate } = this.props.navigation
    navigate("Screen4", {})

  }
  _onPress = () => {

  };
  _onButtonClick = () => {

  };
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#3D3890',
        height: 0.5,
      }}
    />
  );
  renderListItem(item) {
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
      <TouchableOpacity style={{ alignSelf: 'stretch', flex: 1 }} onPress={this._onPress}>
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'flex-start', padding: 20 }}>

          <Image style={{ width: 25, height: 35, alignSelf: 'center' }} source={require('../assets/images/tag.png')} />

          <View style={{ marginLeft: 15 }}>

            <Text style={{ color: "white", fontWeight: 'bold', fontSize: 15, }}>
              {item.title}
            </Text>
            <Text style={{ color: "#929ADD" }}>
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

        <Text style={{ marginBottom: 60, fontWeight: 'bold', fontSize: 45, color: "white", alignSelf: 'center' }}>
          Podsource
            </Text>
        <View style={{
          height: 215,
          backgroundColor: '#2D2B66', overflow: 'hidden',
          marginLeft: 70, marginRight: 70, marginBottom: 60,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}>
          <View style={{ flexDirection: 'row', alignSelf: 'stretch', backgroundColor: '#3D3890', paddingLeft: 20, paddingRight: 20, paddingTop: 15, paddingBottom: 15 }}>
            <Text style={{ flex: 9, color: "white", alignSelf: 'center' }}>
              What do you want to learn?
            </Text>
            <Image style={{ flex: 1, width: 25, height: 25, alignSelf: 'center' }} source={require('../assets/images/podicon.png')} />

          </View>
          <FlatList
            data={this.state.data}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) => this.renderListItem(item)}

          />
        </View>

        <View style={{
          alignItems: 'center'
        }}>


          <TouchableOpacity style={{}} onPress={this._onButtonClick}>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>

              <View
                style={{
                  backgroundColor: '#3D3890',
                  height: 1,
                }}
              />
              <Text style={{ margin: 15, color: 'white' }}>Stumble-a-pad</Text>
              <View
                style={{
                  backgroundColor: '#3D3890',
                  height: 1,
                }}
              />
            </View>

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
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
