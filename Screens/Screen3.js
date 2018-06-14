/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  FlatList,
  View
} from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ title: 'a', subItem: [{ id: '1', name: 'sub1' },{ id: '2', name: 'sub2' }] }, { title: 'b', subItem: [{ id: '1', name: 'sub1' }] },{ title: 'a', subItem: [{ id: '1', name: 'sub1' },{ id: '2', name: 'sub2' }] }, { title: 'b', subItem: [{ id: '1', name: 'sub1' }] }] }
  }
  onClick() {
    const { navigate } = this.props.navigation
    navigate("Screen4", {})

  }
  _onPress = () => {
    
  };
  renderListItem(item) {
    var fLen = item.subItem.length;
    var sybItems = item.subItem;
    var subItemStr='';
    for (i = 0; i < fLen; i++) {
      subItemStr += ','+sybItems[i].name;
    }
    return (
      <TouchableOpacity style={{alignSelf:'stretch',flex:1}} onPress={this._onPress}>
        <View style={{alignSelf:'stretch',flex:1,alignSelf:'stretch',alignItems:'flex-start', padding: 20 }}>
          <Text style={{ color: "white" }}>
            {item.title}
          </Text>
          <Text style={{ color: "white" }}>
            {subItemStr}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height:250,
          backgroundColor: '#2D2B66', overflow:'hidden',
          marginLeft: 70, marginRight: 70, marginBottom: 60,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}>
          <View style={{ alignSelf: 'stretch', backgroundColor: '#3D3890', padding: 20 }}>
            <Text style={{ color: "white" }}>
              What do you want to learn?
            </Text>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.renderListItem(item)}
          />
        </View>

        <View style={{
          alignItems: 'center'
        }}>
          <Button style={{}} title='Stumble-a-pad'></Button>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
