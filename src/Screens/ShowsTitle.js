
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList ,Dimensions} from 'react-native';
import Tags from "react-native-tags";
import ViewMoreText from "../components/ShowMoreComponent"
const Color = require('../Constants/ConstantColor');



var data = [
    { "id": 1, "name": "Charil", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
];

let deviceWidth = Dimensions.get('window').width


export default class ShowTitleApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textTitle: 'Show Title', textDescription: ' Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.', array_Tags: ["Tag 1", "Tag 2", "Tag 3"],
        }
    }


    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'gray'
        },

    })




    randerViewMore(onPress) {
        return (
            <Text style={{ color: Color.COL_DarkYellow, paddingLeft: 10 }}
                onPress={onPress}>Read More</Text>
        )
    }

    renderViewLess(onPress) {
        return (
            <Text style={{ color: Color.COL_DarkYellow, paddingLeft: 10 }}
                onPress={onPress}>Read less</Text>
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
                <Text style={{ paddingTop: 20, fontWeight: 'bold', fontSize: 50, color: Color.COL_pastel_blue }}>{this.state.textTitle}</Text>
                <ScrollView contentContainerStyle={styles_View.contentContainer} style={{
                    flexGrow: 1,

                    alignContent: 'center',
                }} >
                    <View style={styles_View.imageContainer}>
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

                    <Tags style={{ paddingTop: 20 }}
                        initialTags={tagArray}
                        containerStyle={{ justifyContent: "center" }}
                        tagContainerStyle={{ backgroundColor: Color.COL_DarkYellow }}
                        readonly
                    />

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
                    <View style={{backgroundColor:'red',height:100}}>
                    <FlatList style={{backgroundColor:Color.COL_DarkYellow}}
                       data={data}
                       renderItem={({item}) =>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{height:150,backgroundColor:'gray',width:deviceWidth-150,paddingTop:10}}><Text>{item.id}</Text></View>
                           <View style={{height:150,backgroundColor:'red',width:150,paddingTop:10}}><Text>{item.id}</Text></View>
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
        paddingVertical: 20,
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
            height: 2,
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