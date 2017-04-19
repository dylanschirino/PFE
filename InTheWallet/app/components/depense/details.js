import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let Details = React.createClass ({
  render() {
    return (
      <View style={{flex:1,}}>
        <Text>{this.props.depense_id}</Text>
      </View>
    )}
  });

  module.exports = Details;
