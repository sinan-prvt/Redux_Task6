import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddTodo, RemoveTodo } from './UseSlice'

const App = () => {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [text, setText] = useState("")

  return(
    <>
      <div>
        <h2>Todo List 📋</h2>
        <input
          type = "text"
          value = {text}
          onChange = {(e) => setText(e.target.value)}
          placeholder = "Please Enter"
        />
        <button onClick={() => {
          dispatch(AddTodo(text))
          setText("")
        }} >Add</button> 
      </div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(RemoveTodo(todo.id))} >Remove</button>
        </li>
      ))}
    </>
  )
}

export default App