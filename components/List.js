import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    marginBottom: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
  textComplete: {
    textDecorationLine: 'line-through',
    fontSize: 22
  },
  textIncomplete: {
    fontSize: 22
  },
  cross: {
    color:'red', 
    fontSize: 15
  },
  crossContainer: {
    marginTop: 0, 
    marginRight: 'auto', 
    marginBottom: 5, 
    marginLeft: 20
  }
  
})

export default class List extends Component {


  renderItem = (item, index) => {
      const {onPressItem, onCheck} = this.props
      return (
        
          <View
          style={styles.item}
          key= {index}>
           {item.completed ? 
           <Text style={styles.textComplete}>{item.text}</Text> :
           <Text style={styles.textIncomplete}>{item.text}</Text>
           }
           <View style={{flexDirection:'row'}}>
            <Checkbox style={{marginLeft:'auto'}}
              onPress={()=> onCheck(item.key) }
              completed={item.completed}
              />
            <TouchableOpacity onPress={()=> onPressItem(item.key)} style={styles.crossContainer}>
              <Text style={styles.cross}>x</Text>
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
