import React, { Component } from 'react';
import Slider from "react-native-slider";
import { View, StyleSheet, Text, Image, TouchableOpacity,Alert } from 'react-native'
import { scale, moderateScale, verticalScale } from '../utility/scaling';
import Sound from 'react-native-sound';
const soundImg = require('../assets/images/play-button.png');
const muteImg = require('../assets/images/stop-button.png');
val = 0
export default class Basic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            musicPlay: 0, value: 0, showSoundImg: true, maximumValue: 0,
            array_Music: [
                {
                    title: 'mp3 remote download',
                    url: 'https://api.soundcloud.com/tracks/230277131/stream?client_id=3ed8237e8a4bfc63db818a732c95bc38',
                },
                {
                    title: 'mp3 remote download',
                    url: 'https://soundcloud.com/latest-bollywood-songs/dil-kare-ho-mann-jahaan-atif-aslam',
                },
                {
                    title: 'mp3 remote download',
                    url: 'https://api.soundcloud.com/tracks/230277131/stream?client_id=3ed8237e8a4bfc63db818a732c95bc38',
                },

                {
                    title: 'aac remote download',
                    url: 'http://searchgurbani.com/audio/sggs/1.mp3',
                }]
        }
    }
    /**
 * Generic play function for majority of tests
 */

    playSound(testInfo, component) {
        component.setTestState(testInfo, component, 'pending');
        let me = this;
        me.setState({ value:0 })
                const callback = (error, sound) => {
            me.sound = sound;
            if (error) {
                Alert.alert('error', error.message);
                this.setTestState(testInfo, component, 'fail');
                return;
            }
            this.setTestState(testInfo, component, 'playing');
            // Run optional pre-play callback
            testInfo.onPrepared && testInfo.onPrepared(sound, component);
            sound.play(() => {
                // Success counts as getting to the end
                this.setTestState(testInfo, component, 'win');
                // Release when it's done so we're not using up resources
                sound.release();
            });
        };

        if (this.sound) {
            this.sound.play()
        }

        // If the audio is a 'require' then the second parameter must be the callback.
        else if (testInfo.isRequire) {
            me.sound = new Sound(testInfo.url, error => callback(error, me.sound));
        } else {
            me.sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, me.sound));
        }
        // setTimeout(() => {
        //     console.log('I do not leak!');
        //     console.log(me.sound.getDuration())
        //     if(me.sound.getDuration()!=null)
        //     me.setState({ maximumValue: me.sound.getDuration() })
        //     var releaseTimer = setInterval(() => {
        //         var seconds = 0
        //         me.sound.getCurrentTime((sec) => {
        //             console.log('at ' + sec)
        //             seconds = sec
        //             if(seconds>0)
        //             {
        //                 me.setState({ value:seconds })
        //             }

        //         });
                
        //     }, 1000);
        // }, 10000);
    }

    setTestState(testInfo, component, status) {
        component.setState({ tests: { ...component.state.tests, [testInfo.title]: status } });
    }
    componentDidMount() {
        // this.player=
    }

    renderImage() {
        var imgSource = this.state.showSoundImg ? soundImg : muteImg;
        return (
            <Image style={{
                width: 60,
                height: 60
            }}
                source={imgSource}
            />
        );
    }
    render() {

        return (
            <View style={styles.container}>
                { 
                <Slider trackStyle={StyleSheet.track}
                    thumbStyle={StyleSheet.thumb} thumbTintColor='#00000000'
                    minimumTrackTintColor='#eecba8' thumbImage={require('../assets/images/SlideTm.png')}
                    maximumValue = {this.state.maximumValue}
                    minimumValue ={0}
                    value={this.state.value}
                    onValueChange={(value) =>
                         {
                        this.setState({value:value})
                        this.sound.setCurrentTime(value)
                    }
                    }
                >
                </Slider >}
                {/* {this.state.value}
                <Text style={{ color: '#eecba8' }}>
                    Value: {this.state.value}
                </Text>
                <Text style={{ color: '#eecba8' }}>
                    maxVal: {this.state.maximumValue}
                </Text> */}
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={() => this.onClick_MovePrevious()}>
                        <Image style={styles.image} source={require("../assets/images/prev15.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.onClick_MoveSecondBackWord()}>
                        <Image style={styles.image2} source={require("../assets/images/play_prev.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.centerButton} onPress={() => this.onClick_PlayMusic()}>

                        {this.renderImage()}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.onclick_MoveSecondsForword()}>
                        <Image style={styles.image2} source={require("../assets/images/play_next.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.onclick_MoveNext()}>
                        <Image style={styles.image} source={require("../assets/images/next15.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onClick_PlayMusic() {
        if (this.state.showSoundImg == true) {
            alert("Playing")
            info = this.state.array_Music[this.state.musicPlay]
            this.playSound(info, this)
          
        }
        else {
            // this.state.loopingSound.stop().release();
            if (this.sound)

                this.sound.pause()
            alert("Stop Playing")
        }
        this.setState({ showSoundImg: !this.state.showSoundImg })
        // this.setState=({showSoundImg:!this.state.showSoundImg})
    }
    onclick_MoveNext() {
        alert("you clicked next")


        if (val < this.state.array_Music.length) {
            this.setState({
                musicPlay: this.state.musicPlay++
            })
            val = val + 1
            this.sound.stop()
            this.sound = undefined;
            info = this.state.array_Music[val]
            this.playSound(info, this)
        }
    }

    onClick_MovePrevious() {

        alert("you clicked previous")
        if (val > 0) {
            this.setState({
                musicPlay: this.state.musicPlay--
            })
            val = val - 1
            this.sound.stop()
            this.sound = undefined;
            info = this.state.array_Music[val]
            this.playSound(info, this)
        }

    }
    onclick_MoveSecondsForword() {
        var seconds = 0
        var me = this
        this.sound.getCurrentTime((sec) => {
            console.log('at ' + sec)
            seconds = sec
            if ((me.sound.getDuration()-seconds)> 15)
        {
            me.sound.setCurrentTime(seconds + 15.0)
        }

        });
        


    }


    onClick_MoveSecondBackWord() {
        var seconds = 0
        var me = this
        this.sound.getCurrentTime((sec) => {
            console.log('at ' + sec)
            seconds = sec

        });
        if (seconds >= 15)
        {
            this.sound.setCurrentTime(seconds - 15.0)
        }

            }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "stretch",
        top: 20,
        backgroundColor: 'black'
        //
    },

    track: {
        marginLeft: 10,
        marginRight: 10,
        height: 14,
        width: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        borderColor: '#9a9a9a',
        borderWidth: 1,
    },
    thumb: {
        width: 0,
        height: 0,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
        justifyContent: "center"

    },
    button: {

        margin: moderateScale(17), width: moderateScale(30), height: moderateScale(30), alignSelf: 'center'
    },

    centerButton: {

        margin: moderateScale(17), width: moderateScale(60), height: moderateScale(60), alignSelf: 'center'
    },
    image:
        {
            width: 20,
            height: 20
        },
    image2:
        {
            width: 30,
            height: 30
        }

});

