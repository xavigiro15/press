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

  state = {
    scores: []
  }

  static navigationOptions = {
    title: 'Rankings',
    headerLeft: null,
    cardStack: {
            gesturesEnabled: false,
        },
  }

  componentDidMount() {
    fetch('http://localhost:3000/scores')
    .then(response => response.json())
    .then(scores => {
        return this.setState({scores:scores});
      })
  }

  restart = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }

  renderScores = () => {
    return this.state.scores.map(score => (
      <View>
        <Text style={styles.players}>
          {score.name} — {score.value} HITS
        </Text>
      </View>
    ))
  }

  render() {
    console.log(this.props.navigation.state.params.hits);
    return (
      <View style={styles.container}>
        {this.renderScores()}

        <Button
          onPress={this.restart}
          title="Restart"
        />
      </View>
    );
  }

}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    players: {
      fontWeight: 'bold',
      padding: 5,
      borderBottomColor: 'black',
      borderBottomWidth: 1,

    },

  });
