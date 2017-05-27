import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../style/noConnection');


let noConnection = React.createClass ({

  render() {
    return (
        <View style={styles.body}>
        <StatusBar barStyle="light-content"
        />
        <View style={styles.mainContent}>
          <Text style={styles.title}>Hey l’ami ! Tu ferais mieux</Text>
          <Image
            style={styles.img}
            source={ require('../img/nowifi.png')}
          />
          <Text style={styles.title}>de te connecter à internet</Text>
          </View>
      </View>
    )
  }
});

export default noConnection;
