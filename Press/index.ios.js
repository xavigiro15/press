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
  Button,
  AlertIOS,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Rankings from './src/components/Rankings';
import HitsButton from './src/components/HitsButton';
import Timer from './src/components/Timer';

const seconds = 3;

export default class MainScreen extends Component {

  static navigationOptions = {
    title: 'Press Party!',
  };

  state = {
    activeCount: false,
    name: '',
    seconds: seconds,
    hits : 0,
  };

  onButtonPress = () => {
    console.log('Pressed');
    if (this.state.activeCount === false) {
      this.setState({ activeCount: true})
      timerId = setInterval(this.countdown, 1000);
    }
    if (this.state.activeCount === true) {
      this.setState({ hits: this.state.hits + 1 });
    }
  }


  countdown = () => {
    console.log('countdownClick');
    if(this.state.seconds === 1){
      clearTimeout(timerId);
      this.state.seconds = 0;
      this.setState({ seconds: this.state.seconds});
      console.log(this.state.seconds);
      this.scoreAlert();
    } else {
      this.state.seconds--;
      this.setState({ seconds: this.state.seconds});
    }
  }


  endTimer = () => {
    this.setState({ activeCount: false});
    this.scoreAlert();
  }

  scoreAlert = () => {Alert.alert(
    'Final Score',
    this.state.hits.toString() + ' hits at a speed of ' + (this.state.hits/seconds).toFixed(2).toString() + ' hps',
    [
      {text: 'Okay', onPress: this.nameType},
    ],
  )}

  nameType = () => AlertIOS.prompt(
    'Type your name',
    null,
    this.saveResponse
  );

  saveResponse = (value) => {
    console.log(value);
    this.setState({ name: value});
    console.log(this.state.name);
    this.rankingNav();
  }

  rankingNav = () => {
    const { navigate } = this.props.navigation;
    console.log('IN Rank Nav');
    navigate('Rankings', {
      hits: this.state.hits,
      newname: this.state.name,
      restart: this.restart,
    });
    //parar crono
    if (this.state.activeCount === true) {
      clearTimeout(timerId);
    }
    this.setState({ hits: 0,
    seconds: seconds,
    activeCount: false,
    name: '',
  });
  }




  render() {
    return (
      <View style={styles.container}>
        <Timer
          start={this.state.activeCount}
          seconds={this.state.seconds}
        />

        <HitsButton
          onButtonPress={this.onButtonPress}
          hits={this.state.hits}
        />

        <Button
          onPress={this.rankingNav}
          title="Rankings"
        />

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});


const Press = StackNavigator({
  Home: { screen: MainScreen },
  Rankings: {
    path: 'src/components/Rankings',
    screen: Rankings,
  },
});

AppRegistry.registerComponent('Press', () => Press);
