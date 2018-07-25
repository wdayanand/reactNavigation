


import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, Dimensions, ImageBackground,Alert } from 'react-native';
import Tags from "react-native-tags";
import ViewMoreText from "../components/ShowMoreComponent"
const Color = require('../Constants/ConstantColor');
import { I18n } from '../utility/translations/Locale';
import { scale, moderateScale, verticalScale } from '../utility/scaling';





var data = [
    { "id": 1, "name": "Episode 1", "last_message": "One sentence description.", "picture": "url", "time": "75 Minute" },
    { "id": 2, "name": "Episode 2", "last_message": "One sentence description.", "picture": "url", "time": "75 Minute" },
    { "id": 3, "name": "Episode 3", "last_message": "One sentence description.", "picture": "url", "time": "75 Minute" },
];

let deviceWidth = Dimensions.get('window').width


export default class ShowTitleApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textTitle: I18n.t('txt_Show_Title'), textDescription: ' Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.', array_Tags: ["Tag 1", "Tag 2", "Tag 3"],
        }
    }


    static navigationOptions = ({ navigation }) => ({
        headerTintColor: Color.WHITE,
        headerStyle: {
            backgroundColor: 'gray'
        },

    })




    randerViewMore(onPress) {
        return (
            <Text style={{ color: Color.COL_DarkYellow, paddingLeft: 10 }}
                onPress={onPress}>{I18n.t('txt_Read_More')}</Text>
        )
    }

    renderViewLess(onPress) {
        return (
            <Text style={{ color: Color.COL_DarkYellow, paddingLeft: 10 }}
                onPress={onPress}>{I18n.t('txt_Read_Less')}</Text>
        )
    }

    renderItem(data) {
        let { item, index } = data;
        return (
            <View style={styles.itemBlock}>
                <Image source={{ uri: item.picture }} style={styles.itemImage} />
                <View style={styles.itemMeta}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemLastMessage}>{item.last_message}</Text>
                </View>
            </View>
        )
    }

    render() {
        var tagArray = this.state.array_Tags

        return (
            <View style={styles_View.container}>
                <Text style={{ paddingTop: 20, fontWeight: 'bold', fontSize: moderateScale(45), color: Color.COL_pastel_blue }}>{this.state.textTitle}</Text>
                <ScrollView contentContainerStyle={styles_View.contentContainer} style={{
                    flexGrow: 1,
                    alignContent: 'center',
                }} >
                    <View style={styles_View.imageContainer}>
                        {
                            <ImageBackground source={require('../assets/images/dummy.png')} style={{ width: '100%', height: '100%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ width: 10, height: 10, alignItems: 'flex-start' }}>
                                        <Image
                                            style={styles.button}
                                            source={require('../assets/images/dropDown.png')}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: 10, height: 10, alignItems: 'flex-end' }}>
                                        <Image
                                            style={styles.button}
                                            source={require('../assets/images/like.png')}
                                        />
                                    </TouchableOpacity>

                                </View>
                            </ImageBackground>

                        }


                    </View>

                    <Tags style={{ paddingTop: 20 }}
                        initialTags={tagArray}

                        containerStyle={{ justifyContent: "center" }}
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event) => console.log(index, tagLabel, event)}
                        tagContainerStyle={{ backgroundColor: Color.COL_DarkYellow }} readonly
                    >

                    </Tags>

                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={this.renderViewMore}
                        renderViewLess={this.renderViewLess}

                        textStyle={{ textAlign: 'center', color: 'white', paddingLeft: 10, paddingRight: 10, }}
                    >
                        <Text>
                            {this.state.textDescription}
                        </Text>
                    </ViewMoreText>
                    <View style={styles_View.sepratorView}></View>
                    <View style={{ height: 200 }}>
                        <FlatList style={{ backgroundColor: Color.TRANSPARENT, height: '100%' }}
                            data={data}
                            renderItem={({ item }) =>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ height: 100, width: deviceWidth - 150, justifyContent: 'center', paddingLeft: 10 }}>
                                        <Text style={{ color: Color.WHITE, fontSize: 20 }} >{item.name}</Text>
                                        <Text style={{ color: Color.COL_pastel_blue, fontSize: 15 }}>{item.last_message}</Text>
                                        <Text style={{ color: Color.COL_DarkYellow, fontSize: 12 }}>{item.time}</Text>
                                    </View>

                                    <View style={{ height: 100, width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <TouchableOpacity style={{ width: 10, height: 10, alignItems: 'flex-start', paddingLeft: 10 }} onPress= {()=>Alert.alert(item.name)}>
                                            <Image
                                                style={styles.button}
                                                source={require('../assets/images/dotdot.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: 10, height: 10, alignItems: 'center' }}>
                                            <Image
                                                style={styles.button}
                                                source={require('../assets/images/like.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: 10, height: 10, alignItems: 'flex-end', paddingRight: 10 }}>
                                            <Image
                                                style={{ width: 20, height: 35 }}
                                                source={require('../assets/images/ic_bookmark.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                //
                            }
                            ItemSeparatorComponent={Separator}
                        />
                    </View>

                </ScrollView>

            </View>
        );
    }
}


const styles_View = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.COL_0_49_125,
    },

    imageContainer:
        {
            width: 150,
            height: 120,
            backgroundColor: 'white',
            marginTop: 20,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',

        },

    contentContainer: {
        paddingVertical: 0,
        justifyContent: 'center'
    },

    sepratorView:
        {
            flex: 1,
            height: 2,
            backgroundColor: 'white',
            marginTop: 10,
        }

});

const Separator = () => (
    <View style={[styles.separatorContainer]} />
);

const styles = StyleSheet.create(
    {
        separatorContainer: {
            height: 1,
            backgroundColor: 'white',
        },
        tabsContainerStyle: {
            backgroundColor: Color.CLEAR,
        },
        tabsStyle: {
            backgroundColor: Color.COL_0_49_125,
        },
        activeTab: {
            backgroundColor: Color.COL_28_75_144
        }, container: {
            flex: 1,
            marginTop: 20,
        },
        itemBlock: {
            flexDirection: 'row',
            paddingBottom: 5,
        },
        itemImage: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        itemMeta: {
            marginLeft: 10,
            justifyContent: 'center',
        },
        itemName: {
            fontSize: 20,
        },
        itemLastMessage: {
            fontSize: 14,
            color: "#111",
        }
    }
)