/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Main from './Component/Main/main.js';

export default class Shoppong extends Component {
  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Shoppong', () => Shoppong);
