import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import {View} from 'react-native'



export default class FetchExample extends React.Component {
    render() {

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <SearchBar
                    onChangeText={someMethod}
                    onClear={someMethod}
                    placeholder='Type Here...' />
            </View>
        );
    }
}