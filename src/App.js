import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import ListTodos from './components/ListTodos';
import TodosForm from './components/TodosForm';

const App = () => {

  const todosStored = localStorage.getItem('todos') 

  const initialState = todosStored 
    ? JSON.parse(todosStored)
    : []
  
  const displayCompleted = localStorage.getItem('displayCompleted') === 'true'

  const [todos, setTodos] = useState(initialState)
  const todosLength = todos.length

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const [todosCompleted, setTodosCompleted] = useState(displayCompleted)

  useEffect(()=> {
    localStorage.setItem('displayCompleted', todosCompleted)
  }, [todosCompleted])

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
