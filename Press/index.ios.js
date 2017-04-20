/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert
} from 'react-native';

const seconds = 30;

export default class Press extends Component {

  state = {
    hits : 0,
    seconds: seconds,
  };

  countdown = () => {
    console.log('countdownClick');
    if (this.state.seconds === 0) {
      clearTimeout(timerId);
      this.state.seconds = 'N0';
      this.setState({ seconds: this.state.seconds});
      this.scoreAlert();
    } else {
      this.state.seconds--;
      this.setState({ seconds: this.state.seconds});
    }
  }

  activeCount = false;

  onButtonPress = () => {
    console.log('Pressed');
    if (this.activeCount === false) {
      timerId = setInterval(this.countdown, 1000);
      this.activeCount = true;
    }
    if (this.state.seconds !== 'N0') {
      this.setState({ hits: this.state.hits + 1 });
    }
  }

  scoreAlert = () => {Alert.alert(
    'Final Score',
    this.state.hits.toString() + ' hits at a speed of ' + (this.state.hits/seconds).toFixed(2).toString() + ' hps',
  )}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.up}>
          {this.state.seconds} SECONDS LEFT
        </Text>

        <Text>
          {this.state.hits} HITS
        </Text>

        <TouchableHighlight onPress={this.onButtonPress}>
          <View style={styles.button}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#60b7e2',
    margin: 5,
    height: 300,
    width: 300,
  },
  up: {
    margin: 40,
  }

});

AppRegistry.registerComponent('Press', () => Press);
