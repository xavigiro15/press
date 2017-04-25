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


export default class Hits extends Component {



  render() {
    return (
      <View>
        <Text>
          {this.props.hits} HITS
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  // up: {
  //   margin: 40,
  // }

});
