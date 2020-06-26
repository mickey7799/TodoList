import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
   
  },
  text: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: 50
  },
  container:{
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'solid'
  }
})

export default class Footer extends Component {
  
  render() {
    const {removeComplete} = this.props;
    return (
      <View style ={styles.container}>
        <TouchableOpacity style={styles.footer} onPress={()=>removeComplete()}>
          <Text style={styles.text} >Remove Completed Items </Text>
        </TouchableOpacity>
        <ImageBackground source={require('../assets/laptop.jpg')} style={styles.image}>
          
        </ImageBackground>
        
      </View>
    );
  }
}
