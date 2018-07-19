import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}} >
                <View style={styles.image}  >
                    <Image source={require('../assets/images/tag.png')} />
                </View>
                <View   >
                    <Text style={{color:'black'}} >Title</Text>
                    <Text style={{color:'black'}} >Title</Text>
                    <Text style={{color:'black'}} >Title</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        backgroundColor: 'red'
    }
});
