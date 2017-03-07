import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,StyleSheet } from 'react-native';

export default class Introduction2 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.test}>Introduction2</Text>
        <TouchableHighlight onPress={this.goIntroduction.bind(this)}>
          <Text style={styles.test}>Go to Introduction 1</Text>
        </TouchableHighlight>
      </View>
    )
  }

  goIntroduction() {
    this.props.navigator.push({ screen: 'Introduction' });
  }
}

const styles = StyleSheet.create({
  test: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop:40,
    textAlign:'center',
  }
});
