import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto'

  },
  text: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 50
  }
})

export default class Footer extends Component {
  
  render() {
    const {removeComplete} = this.props;
    return (
      <TouchableOpacity style={styles.footer} onPress={()=>removeComplete()}>
        <Text style={styles.text} >Remove Completed Items </Text>
      </TouchableOpacity>

    );
  }
}
