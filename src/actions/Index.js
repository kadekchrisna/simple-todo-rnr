import {ADD_TODO, TOGGLE_TODO} from './ActionTypes';

let todoId = 0
export const addToDo = (text) => ({
    type: ADD_TODO,
    id: todoId++,
    text
})

export const toggleToDo = (id) => ({
    type: TOGGLE_TODO,
    id

})