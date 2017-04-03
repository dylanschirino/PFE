import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image,ProgressViewIOS} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProgressIndicator from 'react-native-progress-indicator';


let styles = require('../style/homeStyle');

let Home = React.createClass ({
  render() {
    return (
      <View>
      <View style={styles.header}>
        <StatusBar barStyle="light-content"
        />
        <View style={styles.limitFirst}>
            <Text style={styles.amount}>1.500€</Text>
            <Text style={styles.label}> {'Dépenses du mois'.toUpperCase() } </Text>
          </View>
          <View style={styles.limitSecond}>
            <Text style={styles.amount}>2.200€</Text>
            <Text style={styles.label}>{'Limite du mois'.toUpperCase() } </Text>
          </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressView}>
          <ProgressViewIOS style={styles.progressBar} trackTintColor={'#124D73'} progressTintColor='white' progress={0.5} />
          <Text style={styles.percent}>50%</Text>
        </View>
      </View>
      </View>

    )}
  });

  module.exports = Home;
