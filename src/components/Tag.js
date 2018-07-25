import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableOpacity ,Image} from "react-native";

import styles from "./styles";

const Tag = ({ label, onPress, tagContainerStyle, tagTextStyle ,backgrounImage}) => (
  <TouchableOpacity style={[styles.tag, tagContainerStyle]}
 

  onPress={onPress}>
   <ImageBackground source={require('../assets/images/gradient.png')} style={{ width: '100%', height: '100%' }}/>
    <Text style={[styles.tagLabel, tagTextStyle]}>{label}</Text>
  </TouchableOpacity>
);

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default Tag;
