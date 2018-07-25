import React, { Component } from 'react'
import {
    View,
    ViewPropTypes,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'
import PropTypes from 'prop-types';

const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
    if (multiple) {
        onTabPress(index);
    }
    else if (selectedIndex !== index) {
        onTabPress(index);
    }
};

const TabOption = ({
    isTabActive, index, badge, text,values,
    firstTabStyle, lastTabStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress,
}) => {
    return (
        <TouchableOpacity style={[
            styles.tabStyle,
            tabStyle,
            isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
            firstTabStyle,
            lastTabStyle]}
            onPress={() => onTabPress(index)}
            activeOpacity={1}>
            <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                <Text style={[
                    styles.tabTextStyle,
                    tabTextStyle,
                    isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {text}
                </Text>
                {
                    badge ?
                        <View style={[
                            styles.tabBadgeContainerStyle,
                            tabBadgeContainerStyle,
                            isTabActive ? [styles.activeTabBadgeContainerStyle, activeTabBadgeContainerStyle] : {}]}>
                            <Text style={[
                                styles.tabBadgeStyle,
                                tabBadgeStyle,
                                isTabActive ? [styles.activeTabBadgeStyle, activeTabBadgeStyle] : {}]}>
                                {badge}
                            </Text>
                        </View> : false                    
                }                                
            </View>
           
        </TouchableOpacity>
    );
}
/* {
                (index >= 0 && index < values.length-1) ?<View style={[styles.separatorStyle,                        
                        ]}></View> : false
            } */
const SegmentedControlTab = ({
    multiple, selectedIndex, selectedIndices, values,
    badges, borderRadius, tabsContainerStyle,
    tabStyle, activeTabStyle,
    tabTextStyle, activeTabTextStyle,
    tabBadgeContainerStyle, activeTabBadgeContainerStyle,
    tabBadgeStyle, activeTabBadgeStyle,
    onTabPress,
}) => {

    const firstTabStyle = [{  borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }]
    const lastTabStyle = [{ borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }]
    
    return (
        <View
            style={[styles.tabsContainerStyle, tabsContainerStyle]}
            removeClippedSubviews={false}>
            {
                values.map((item, index) => {
                    return (
                        <TabOption
                            key={index}
                            values = {values}
                            index={index}
                            badge={badges && badges[index] ? badges[index] : false}
                            isTabActive={multiple ? selectedIndices.includes(index) : selectedIndex === index}
                            text={item}
                            onTabPress={(index) => handleTabPress(index, multiple, selectedIndex, onTabPress)}
                            firstTabStyle={index === 0 ? [firstTabStyle] : {}}
                            lastTabStyle={index === values.length - 1 ? [lastTabStyle] : {}}
                            tabStyle={[index === values.length - 1? styles.tabStyleWithoutBorder : tabStyle ]}
                            activeTabStyle={activeTabStyle}
                            tabTextStyle={tabTextStyle}
                            activeTabTextStyle={activeTabTextStyle}
                            tabBadgeContainerStyle={tabBadgeContainerStyle}
                            activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
                            tabBadgeStyle={tabBadgeStyle}
                            activeTabBadgeStyle={activeTabBadgeStyle} />
                    );
                })
            }
        </View>
    );
};

SegmentedControlTab.propTypes = {
    values: PropTypes.array,
    badges: PropTypes.array,
    multiple: PropTypes.bool,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    selectedIndices: PropTypes.arrayOf(PropTypes.number),
    tabsContainerStyle: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    activeTabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    tabBadgeContainerStyle: Text.propTypes.style,
    activeTabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    activeTabBadgeStyle: Text.propTypes.style,
    borderRadius: PropTypes.number
}

SegmentedControlTab.defaultProps = {
    values: ['One', 'Two', 'Three'],
    badges: ['', '', ''],
    multiple: false,
    selectedIndex: 0,
    selectedIndices: [0],
    onTabPress() { },
    tabsContainerStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    borderRadius: 5
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    tabStyle: {
        paddingVertical: 9,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:1,
        borderColor: 'red',
    },
    tabStyleWithoutBorder: {
        paddingVertical: 9,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:0,        
        backgroundColor: 'rgba(0,49,125,1)'
    },
    activeTabStyle: {
        backgroundColor: '#0076FF'
    },
    tabTextStyle: {
        color: '#0076FF'
    },
    activeTabTextStyle: {
        color: 'white'
    },
    tabBadgeContainerStyle: {
        borderRadius: 20,
        backgroundColor: 'red',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginBottom: 3
    },
    activeTabBadgeContainerStyle: {
        backgroundColor: 'white'
    },
    tabBadgeStyle: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold'
    },
    activeTabBadgeStyle: {
        color: 'black'
    },
    separatorStyle: {
        color: 'red',        
        alignItems:'flex-end',     
        marginTop:0,
        backgroundColor:'red',
        height:20,
        width:2  
    }
})

export default SegmentedControlTab
