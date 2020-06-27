import * as TodoActionTypes from '../actionTypes/todolist';

let nextTodoId = 4;

export const addTodo = text => {
    return{
        type: TodoActionTypes.ADD_ITEM,
        payload: text,
        id: nextTodoId++
     };

};

export const removeTodo = index => {
    return{
        type: TodoActionTypes.REMOVE_ITEM,
        payload: index

    };
}

export const toggleComplete = index =>{
    return {
        type: TodoActionTypes.TOGGLE_ITEM_COMPLETED,
        payload: index

    };
}

export const removeComplete = ()=> {
    return {
        type: TodoActionTypes.REMOVE_COMPLETED_ITEMS
    };
}