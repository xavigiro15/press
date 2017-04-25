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


export default class BigButton extends Component {




  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onButtonPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>HIT ME!</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    margin: 5,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
