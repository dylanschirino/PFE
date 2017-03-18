import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../../style/SubscribeStyle');

export default class Subscription extends Component {
  render() {
    return (
        <View>
          <Text style={styles.title}>
          { 'Inscription'.toUpperCase() }
          </Text>
        </View>
    )
  }
}
