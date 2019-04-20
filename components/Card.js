import React from "react";
import {
    Image,
    Text,
    View,
  } from 'react-native';

export default class Card extends React.Component {
  render() {
    const {borderColor, backgroundColor, title } = this.props;
    // navigateTo should be a prop

    return (
    <View style={{width: 150, height: 250,  borderColor: borderColor, borderWidth: 2, backgroundColor: backgroundColor}}>
    <Text>{title}</Text>
    <Image source={require('../images/palm.jpg')} style={{ width: 100, height: 200}}/>
    </View>);
  }
}
