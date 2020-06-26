import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 'auto'
    

  },
  text: {
    color: 'white',
    fontSize: 28,
    paddingTop: 80,
    paddingBottom: 50,
    textAlign: 'center'
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center"
  }
})



export default class Title extends Component {

  render() {
    return (
      <View style={styles.header}>
        <ImageBackground source={require('../assets/laptop.jpg')} style={styles.image}>
          <Text style={styles.text}>Tasks</Text>
        </ImageBackground>
      </View>
    );
  }
}
