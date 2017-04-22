import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput } from 'react-native';

import Form from 'react-native-form';

let styles = require('../../style/addStyle');

let addDepense = React.createClass ({
  render() {
    return (
      <View style={styles.mainContent}>
      <StatusBar barStyle="dark-content"
      />
    <Form ref="addDepense">
      <View style={styles.nameContainer}>
        <Text style={styles.label}>{ 'Nom de la dépense'.toUpperCase() }</Text>
          <View style={styles.inputBox}>
            <Image
              style={styles.icone}
              source={ require('../../img/add-edit.png')}
            />
            <TextInput style={styles.input}
              ref="name"
              onChangeText={(text) => {
                this.setState( {name:text} );
              }}
              placeholder='Ex : Glace au chocolat'
              placeholderTextColor='#B6CBE1'
            />
          </View>
      </View>
    </Form>
      </View>
    )}
  });

  module.exports = addDepense;
