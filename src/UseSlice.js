import { createSlice } from "@reduxjs/toolkit";

const UseSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        AddTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload
            })
        },
        RemoveTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { AddTodo, RemoveTodo } = UseSlice.actions
export default UseSlice.reducer