import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';

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
