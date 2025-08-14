
import { todoType } from "../types/todo.model";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState:todoType[] = [];

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action)=>{
            const newTodo = {id:uuidv4(),text:action.payload}
            state.push(newTodo);
        },
        remove: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        edit: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
            }
        }
    }
    
})



export default todoSlice.reducer;
export const {add, remove, edit} = todoSlice.actions;