import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 40, 
    paddingLeft:20

  }
})

export default class Input extends Component {
  state = { input: ''};

  onChangeText = (input) => {
    this.setState({
      input
    })
  }
  onSubmit = () => {
    const { onSubmitEditing } = this.props
    const { input } = this.state
    if(!input) return 
    onSubmitEditing(input)
    this.setState({
      input:''
    })


  }

  render() {
    return (
      <View>
        <TextInput 
           style={styles.textInput} 
           placeholder="Enter an item!"
           value= {this.state.input}
           onChangeText={this.onChangeText}
           onSubmitEditing={this.onSubmit}
           />
           
      </View>
    );
  }
}
