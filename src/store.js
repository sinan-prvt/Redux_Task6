import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './UseSlice'

const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store