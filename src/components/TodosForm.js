import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"

export default function TodosForm({setTodos, todos}) {

  const [text, setText] = useState('')

  const handleTextInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos([
      {id: uuidv4(), text, completed: false},
      ...todos
    ])

    setText('')
  } 

  return (
    <form 
      onSubmit={handleSubmit}
      className="formulario-tareas"
    >
      <input 
        type="text" 
        value={text}
        onChange={handleTextInput}
        placeholder="Ingresa una tarea"
        className="formulario-tareas__input" 
      />
      <button 
        type="submit"
        className="formulario-tareas__btn"
      >
      <FontAwesomeIcon 
        icon={faPlusSquare} 
        className="formulario-tareas__icono-btn"
      />
      </button>
    </form>
  )
}
