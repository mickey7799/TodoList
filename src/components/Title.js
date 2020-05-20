import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 'auto'
    

  },
  text: {
    backgroundColor: '#ADD8E6',
    color: 'white',
    fontSize: 24,
    paddingTop: 50,
    paddingBottom: 10,
    textAlign: 'center'
  }
})

export default class Title extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>To Do List</Text>
      </View>
    );
  }
}
