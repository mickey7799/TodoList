import React, { Component, PropTypes } from 'react'
import { Alert } from 'react-native'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffe9ec',
    marginBottom: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
})

export default class List extends Component {


  renderItem = (item, index) => {
      const {onPressItem, onCheck} = this.props
      return (
        
          <View
          style={styles.item}
          key= {index}>
           
           <Text>{item.text}</Text>
            
           <View style={{flexDirection:'row'}}>
            <Checkbox style={{marginLeft:'auto'}}
              onPress={()=> onCheck(item.key) }
              completed={item.completed}
              />
            <TouchableOpacity onPress={()=> onPressItem(item.key)} style={{marginLeft:20}}>
              <Text style={{margin:'auto', color:'red', fontSize: 20}}>X</Text>
            </TouchableOpacity>
           </View> 
           
          </View>
          
      )
  }
  render() {
    const { list } = this.props
    
    return (     
      <ScrollView
        bounces={true}
      >
         {list.map(this.renderItem)}
      </ScrollView> 

    )
  }
}
