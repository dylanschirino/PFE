import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';

export default class Introduction extends Component {
  render() {
    return (
      <ScrollView horizontal={true}>
      <View style={styles.svg}>
        <Text style={styles.test}>Introduction1</Text>
        <TouchableHighlight onPress={this.goIntroduction2.bind(this)}>
        <Text style={styles.test}>Go to Intro2</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    )
  }
  goIntroduction2() {
    this.props.navigator.push({ screen: 'Introduction2' });
  }
}

const styles = StyleSheet.create({
  test: {
    padding:30,
    color: 'blue',
    opacity: 1
  },
});
