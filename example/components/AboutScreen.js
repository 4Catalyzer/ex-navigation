import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, StatusBar } from 'react-native';
=======
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
>>>>>>> f9774fb... Vendor NavigationExperimental, update example to sdk15
import pak from '@expo/ex-navigation/package.json';

export default class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'About',
      tintColor: '#000',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ExNavigation</Text>
        <Text style={styles.version}>{pak.version}</Text>

        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    margin: 8,
  },
  version: {
    fontSize: 18,
  },
});
