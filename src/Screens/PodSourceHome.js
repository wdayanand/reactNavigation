import React, { Component } from 'react';
import { TouchableOpacity, View, ImageBackground, Alert, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'

const Color = require('../Constants/ConstantColor');
import { I18n } from '../utility/translations/Locale';

let deviceWidth = Dimensions.get('window').width

var data = [
    { "name": "Discovering" },
    { "name": "Searching" },
    { "name": "Listening" },
];

export default class ShowTitleApp extends Component {
    renderItem(data) {
        let { item, index } = data;
    }

    press(item) {
        Alert.alert(item.name)
    }
    onClick_Search(data)
    {

    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <ImageBackground source={require('../assets/images/Bck1.png')} style={{ width: '100%', height: '100%' }}>
                    <Image resizeMode='stretch' style={{ alignSelf: 'center', width: 300, height: 50, paddingTop: 150, paddingLeft: 30, paddingRight: 30, marginTop: 150 }} source={require('../assets/images/podSource.png')}></Image>
                    <ImageBackground resizeMode='stretch' source={require('../assets/images/HomeBck.png')} style={{ width: deviceWidth - 40, height: 290, alignSelf: 'center' }}>
                        <SearchBar style={{height:20,width:200,paddingTop:0}}
                            clearIcon={{ color:Color.TRANSPARENT}}
                            searchIcon={null} // You could have passed `null` too
                            onChangeText={()=> this.onClick_Search()}
                            onClear={()=> this.onClick_Search()}
                            inputStyle={{height:40,backgroundColor:Color.TRANSPARENT,alignSelf:'center'}}
                            containerStyle={{backgroundColor:Color.TRANSPARENT,color:Color.TRANSPARENT,borderBottomColor:Color.TRANSPARENT,borderTopColor:Color.TRANSPARENT}}
                            placeholder='What are you doing' />
                        <FlatList style={{ backgroundColor: Color.TRANSPARENT, height: '100%', paddingTop: 0 }}
                            data={data}
                            renderItem={({ item }) =>

                                <View style={{ alignItems: 'center', alignSelf: 'center', paddingTop: 30, height: 60 }}>
                                    <TouchableOpacity style={{ width: '100%', height: 60 }} onPress={() => this.press(item)}>

                                        <Text style={{ color: Color.COL_pastel_blue, fontSize: 20 }}> {item.name}</Text>
                                    </TouchableOpacity>

                                </View>
                            }
                            ItemSeparatorComponent={Separator}
                        />

                    </ImageBackground>
                </ImageBackground>
            </View>
        );
    }
}

const styles_View = StyleSheet.create({


    sepratorView:
        {
            flex: 1,
            height: 2,
            backgroundColor: 'white',
            marginTop: 10,
        },
    separatorContainer: {
        height: 15,
        backgroundColor: Color.TRANSPARENT,
    }

});
const Separator = () => (
    <View style={[styles_View.separatorContainer]}

    >
        <Image resizeMode='stretch' style={{ width: 8, height: 15, alignSelf: 'center' }} source={require('../assets/images/ic_bookmark.png')}></Image>
    </View>
);