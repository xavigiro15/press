import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert,
  Button,
  AlertIOS,
} from 'react-native';

export default class Timer extends Component {



  render() {
    return (
      <View>
        <Text style={styles.up}>
          {this.props.seconds} SECONDS LEFT
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  up: {
    margin: 40,
  }

});
