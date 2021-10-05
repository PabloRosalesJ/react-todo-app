import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import ListTodos from './components/ListTodos';
import TodosForm from './components/TodosForm';

const App = () => {

  const initialState = localStorage.getItem('todos') 
    ? JSON.parse(localStorage.getItem('todos'))
    : []

  const [todos, setTodos] = useState(initialState)
  const todosLength = todos.length

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const [todosCompleted, setTodosCompleted] = useState(true)
  // console.log(todos);

  return (
    <div className="contenedor">
      
      <Header 
        setTodosCompleted={setTodosCompleted} 
        todosCompleted={todosCompleted}
        todosLength={todosLength}
      />

      <TodosForm 
        setTodos={setTodos} 
        todos={todos} 
      />

      <ListTodos 
        todos={todos}
        setTodos={setTodos}
        todosCompleted={todosCompleted}
      />

    </div>
  );
}

export default App;
