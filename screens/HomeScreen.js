import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../components/Card';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View  style={{ flex: 1, justifyContent: "center", alignItems: "center"  }}>
        <Card borderColor="blue" backgroundColor="palevioletred" title="Mile End"/>
      </View>
    );
  }
}
