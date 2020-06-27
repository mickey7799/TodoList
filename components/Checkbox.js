import React, { Component } from 'react'
import { View, TouchableOpacity} from 'react-native'

let checkbox;

export default class Checkbox extends Component {
 
  render() {
    const { completed } = this.props;
    
    if (completed) {
      checkbox = <View style={{marginTop: 4, marginBottom: 5, marginLeft: 4, marginRight: 5, width: 10, height: 10, borderWidth: 0.5, backgroundColor: 'black' }}></View>;
    } else {
      checkbox = <View style={{ margin: 'auto', width: 20, height: 20, borderWidth: 0.1, borderColor: 'black' }}></View>;
    }

    return (
      <TouchableOpacity onPress={this.props.onPress} style={{ marginTop: 5, marginBottom: 5, width: 20, height: 20, borderWidth: 0.1, borderColor: 'black' }}>
        {checkbox}
      </TouchableOpacity>
    
    )

  }
}
