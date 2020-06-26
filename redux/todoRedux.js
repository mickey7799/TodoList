import * as TodoActionTypes from '../actionTypes/todolist';

// const types = {
// }

// export const actionCreators = {
// }

const initialState = {
  items: [
    { text: 'Buy coffee', key: 1, completed: false },
    { text: 'Build my app', key: 2, completed: false },
    { text: 'Study for the exam', key: 3, completed: false },
      
  ]
  
}

export const reducer = (state = initialState, action) => {
  const { items } = state
  const { type, payload } = action

  switch(type) {
    
    case TodoActionTypes.ADD_ITEM: 
      return {
        ...state,
        items: [...items,{
          key: action.id,
          text: payload,
          completed: false
        }]
      }

    case TodoActionTypes.REMOVE_ITEM:
      return {
        items: items.filter( (item) => item.key!= payload )
      }

    case TodoActionTypes.TOGGLE_ITEM_COMPLETED:
       
      return {
        items: items.map((item)=>{
          if (item.key !== payload)
              return item
          else 
              return{
                ...item,
                completed:!item.completed          
              }
        })       
      }  
     
    case TodoActionTypes.REMOVE_COMPLETED_ITEMS:
       return {
         items: items.filter((item)=> !item.completed )
       }
      
    default: 
       return state;
    
  }
}



