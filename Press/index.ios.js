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
  Alert,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const seconds = 3;

export default class MainScreen extends Component {

  static navigationOptions = {
    title: 'Hit the Button!',
  };

  state = {
    hits : 0,
    seconds: seconds,
    activeCount: false,
  };

  countdown = () => {
    console.log('countdownClick');
    if (this.state.seconds === 1) {
      clearTimeout(timerId);
      this.state.seconds = 0;
      this.setState({ seconds: this.state.seconds});
      this.scoreAlert();
      this.rankingNav();
    } else {
      this.state.seconds--;
      this.setState({ seconds: this.state.seconds});
    }
  }


  onButtonPress = () => {
    console.log('Pressed');
    if (this.state.activeCount === false) {
      timerId = setInterval(this.countdown, 1000);
      this.setState({ activeCount: true})
    }
    if (this.state.seconds !== 0) {
      this.setState({ hits: this.state.hits + 1 });
    }
  }

  scoreAlert = () => {Alert.alert(
    'Final Score',
    this.state.hits.toString() + ' hits at a speed of ' + (this.state.hits/seconds).toFixed(2).toString() + ' hps',
  )}

  rankingNav = () => {
    const { navigate } = this.props.navigation;
    console.log('IN Rank Nav');
    navigate('Chat');
    // navigate('Chat');
  }

  render() {
    const { navigate } = this.props.navigation;


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
            <Text style={styles.buttonText}>HIT ME!</Text>
          </View>
        </TouchableHighlight>

      </View>

    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Rankings',
  };
  render() {
    return (
      <View>
        <Text>Lorem Ipsum</Text>
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
    backgroundColor: 'red',
    margin: 5,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {

  },
  up: {
    margin: 40,
  }

});


const Press = StackNavigator({
  Home: { screen: MainScreen },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('Press', () => Press);
