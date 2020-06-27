import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'
import * as TodoAction from '../actions/todolist';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  
})

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd:  (text) => {
      dispatch(TodoAction.addTodo(text))    
    },
    onRemove: (index) => {
      dispatch(TodoAction.removeTodo(index)) 
    },
    onCheck: (index)=>{
      dispatch(TodoAction.toggleComplete(index))
    },
    onRemoveComplete: () =>{
      dispatch(TodoAction.removeComplete())
  }
  }
}



class ContainerApp extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func,
  }
  
  render() {
         const {items, onAdd, onRemove, onCheck, onRemoveComplete } = this.props
    return (
      
        <View style={styles.container}>
          <Title />
          <Input onSubmitEditing={onAdd}/>
          
            <List
             list= {items} 
             onPressItem= {onRemove}
             onCheck={onCheck}
            />
          
          <Footer removeComplete={onRemoveComplete}/>
        </View>
        
      

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerApp)
