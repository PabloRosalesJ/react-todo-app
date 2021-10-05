import React from 'react'
import Todo from './Todo'

export default function ListTodos({ todos, setTodos, todosCompleted }) {

  const toggleComplete = id => {

    setTodos( todos.map( todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    }))
  }

  const updateTodo = (id, text) => {
    setTodos( todos.map( todo => {
      if (todo.id === id) {
        return { ...todo, text }
      }
      return todo
    }))
  }

  const deleteTodo = id => {

    setTodos(todos.filter( todo => {
      if (todo.id !== id) {
        return todo
      }
    }))
  }

  return (
    <ul className="lista-tareas">
      { 
      todos.length > 0
      ?
        todos.map( todo => {
          if (todosCompleted) { 
            return <Todo 
              todo={todo} 
              key={todo.id} 
              deleteTodo= {deleteTodo}
              updateTodo = {updateTodo}
              toggleComplete={toggleComplete}
            />
          } else if (!todo.complete) {
            return <Todo 
              todo={todo} 
              key={todo.id} 
              deleteTodo= {deleteTodo}
              updateTodo = {updateTodo}
              toggleComplete={toggleComplete}
            />
          }
          return
        }) 
      :
        <div className="lista-tareas__mensaje">
          No hay tareas
        </div>
      }
    </ul>
  )
}
