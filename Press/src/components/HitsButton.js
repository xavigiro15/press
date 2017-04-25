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

import Hits from './Hits';
import BigButton from './Button';

export default class HitsButton extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Hits
        hits={this.props.hits}
        />

        <BigButton
        onButtonPress={this.props.onButtonPress}

        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});
