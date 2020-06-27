import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 50, 
    paddingLeft:20,
    fontSize: 18
    
  },
  input : {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderBottomWidth: 0.2
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
      <View style={styles.input} >
        <TextInput 
           style={styles.textInput} 
           placeholder="Enter a task here"
           value= {this.state.input}
           onChangeText={this.onChangeText}
           onSubmitEditing={this.onSubmit}
           />
           
      </View>
    );
  }
}
