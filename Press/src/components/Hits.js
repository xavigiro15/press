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
      <View style={styles.hits}>
        <Text style={styles.hitsText}>
          {this.props.hits} HITS
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  hits: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hitsText: {
    fontWeight: 'bold',
    fontFamily: 'Futura',
    fontSize: 20,
  }



});
