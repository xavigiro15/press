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



export default class Rankings extends React.Component {


  static navigationOptions = {
    title: 'Rankings',
    headerLeft: null,
    cardStack: {
            gesturesEnabled: false,
        },
  }

  restart = () => {
    const { goBack } = this.props.navigation;
    goBack();
    this.setState({ hits: 0 });
  }

  render() {
    console.log(this.props.navigation.state.params.hits);
    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>
          Name: {this.props.navigation.state.params.newname}
        </Text>
        <Text>
          {this.props.navigation.state.params.hits} HITS
        </Text>

        <Button
          onPress={this.restart}
          title="Restart"
        />
      </View>
    );
  }
}
