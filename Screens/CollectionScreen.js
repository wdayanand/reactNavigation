import React, { Component } from 'react';
import CarouselPager from 'react-native-carousel-pager';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {Dial} from 'react-native-dial';
import SearchBar from 'react-native-search-bar'
import { Toolbar } from 'react-native-material-ui';
import { BackHandler} from 'react-native'






import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,TouchableOpacity,alert,Dimensions
  } from 'react-native';
  import SegmentedControlTab from 'react-native-segmented-control-tab'



export default class App extends Component {
  static navigationOptions = {
    header: ( /* Your custom header */
      <View>
       <Toolbar
          leftElement="close"
          centerElement="Podsource"
          
          onLeftElementPress={() => this.appClose()}
          searchable={{
            onSubmitEditing:() => this.onSubmitEditing(),
            onChangeText:(input) => this.onChangeText(input),
            autoFocus: true,
            placeholder: 'Search',
          }}
        />

      </View>
    )
  };
  
  state={
    selected: 0
  } 
  
  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }
  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
}
appClose() {
  BackHandler.exitApp()


}

/**
          * Called when search text was changed.
          */
         onChangeText(input) {
    
        }
        /**
        * Called when search was closed.
        */
        onSearchClosed() {
      
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

    render() {
      const { navigate } = this.props.navigation

      return (
        
        <View style= {style.backgroundContent}>
        
        <View style ={style.outerSegmentcontener}>
         <SegmentedControlTab style ={style.segmentContent}
                    values={['Cloud', 'Device']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
          />
           </View>  
           <View style ={style.mainContainer}>
           <CarouselPager ref={ref => this.carousel = ref} initialPage={2} pageStyle={{backgroundColor: '#fff'}}>
          <View key={'page0'}><Text>page1 </Text></View>
          <View key={'page1'}><Text>page2 </Text></View>
          <View key={'page2'}><Text>page3 </Text></View>
          <View key={'page3'}><Text>page4 </Text></View>
        </CarouselPager>
           </View>
         <View style = {style.bottomcontainer}>
        
         <View style= {style.circleComponent}>
         <View style={{ width:this.state.screenWidth-200, margin: 5, padding: 0, backgroundColor: '#5E486B' }}>
            <Text style={{ margin: 1, color: 'white', alignSelf: 'center' }}>Show title</Text>
            <Text style={{ margin: 1, color: 'white', alignSelf: 'center' }}>Episode title</Text>
          </View>
         <View style ={{width:130,height:130,marginTop:0,
}}>                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'white'}}>{this.state.value}</Text>

      	<Dial
      		style={{ width: 120, height: 120, marginBottom:30 ,backgroundColor:'gray'  }}
          
          maximumValue={100}
          minimumValue={0}
          step={10}
          onValueChange={num=>this.setState({ value: num })}
         // onSlidingComplete={num=>this.setState({value:num})}
      	>    <Image style ={{width:120,height:120}} source={require("../assets/images/img_Circle.png")}></Image>
</Dial>

      </View>
</View>

            
            </View>
           <View style ={style.bottomContenerLeft}> 
           <TouchableOpacity  onPress={()=>{alert("you clicked me")}}>
           <Image style ={style.imageContainer2} source={require("../assets/images/dusbin.png")}/>
        </TouchableOpacity>
            </View>
           
            <View style ={style.bottomContenerRight}>
            <TouchableOpacity  onPress={()=>{alert("you clicked me")}}>
            <Image style ={style.imageContainer}source={require("../assets/images/magicLamp.png")}/>

        </TouchableOpacity>
             </View>
             </View>

        </View>
      );
    }
  }
  var str_width = Dimensions.get('window').width;

  const style = StyleSheet.create(
  {

circleComponent:
{
  width:str_width,
  height:200,
  marginTop:0,
  alignItems: 'center'
  ,justifyContent:'center',

}
    ,
    imageContainer:
    {
      width:40,
      height:40
    },
    imageContainer2:
    {
      width:30,
      height:30
    }
    ,
    mainContainer:
    {
      flex:1,
     // backgroundColor:'red',
      marginTop: 20,
      height:100,
      width:str_width,    
    }
    ,
    sliderWidth:
    {
      width:str_width,    

    },
    itemWidth:
    {
      width:str_width- 40,    

    }
    ,

    bottomcontainer:
    {

      width:str_width,
      height:200,
      marginTop: 20,
    }
    ,
    bottomContenerLeft:
    {
      
      width:40,
      height:40,
      marginBottom: 5,
      position: 'absolute',
      bottom:5,
      marginLeft: 25,left:1,
      alignItems: 'center',

      



    },
    bottomContenerRight:
    {
      width:40,
      height:40,
      marginBottom: 5,
      position: 'absolute',
      bottom:5,
      right : 1,
      alignItems: 'center',

      
      marginRight: 25,


      // width:20,
      // height:20
    }
    ,
    backgroundContent:
    {
      backgroundColor: 'black',
      flex: 1, //alignItems: 'stretch', padding: 10,
      //justifyContent: 'center', 
      alignItems: 'center' ,
    },

    outerSegmentcontener:
    {
      width:200,
      height:30,
      marginTop: 20,

    },
    segmentContent:
    {
      width:200,
      height:30,
    }

  } 
);