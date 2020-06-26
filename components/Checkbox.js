import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
})

export default class Checkbox extends Component {
 
  render() {
    const { completed, onPress } = this.props;
    
    if (completed) {
      checkbox = <View style={{marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, width: 10, height: 10, borderWidth: 0.5, backgroundColor: 'black' }}></View>;
    } else {
      checkbox = <View style={{ margin: 'auto', width: 20, height: 20, borderWidth: 0.5, borderColor: 'black' }}></View>;
    }

    return (
      <TouchableOpacity onPress={this.props.onPress} style={{ margin: 'auto', width: 20, height: 20, borderWidth: 0.8, borderColor: 'black' }}>
        {checkbox}
      </TouchableOpacity>
    
    )

  }
}
