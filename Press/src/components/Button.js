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
        <TouchableHighlight style={styles.button} activeOpacity={0.3} onPress={this.props.onButtonPress}>
          <View >
            <Text style={styles.buttonText}>HIT ME!</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3bbef7',
    marginBottom: 20,
    height: 280,
    width: 280,
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Futura',
    fontSize: 12,
  }

});
