import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faEdit, faSquare, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Todo({todo, toggleComplete, updateTodo, deleteTodo}) {

  const [showInput, setShowInput] = useState(false)
  const [todoUpdated, setTodoUpdated] = useState(todo.text)

  const handleEdit = (e) => {
    e.preventDefault()
    updateTodo(todo.id, todoUpdated)
    setShowInput(false)
  }

  return (
    <li className="lista-tareas__tarea" >

      <FontAwesomeIcon 
        className="lista-tareas__icono-check"
        icon={todo.complete ? faCheckSquare : faSquare} 
        onClick={() => toggleComplete(todo.id)}
      />

      <div className="lista-tareas__texto">
        { showInput 
          ?  
            <form 
              onSubmit={handleEdit}
              className="formulario-editar-tarea"
            >
              <input 
                type="text" 
                value={todoUpdated}
                onChange={(e) => setTodoUpdated(e.target.value)}
                className="formulario-editar-tarea__input"
              />
              <button 
                type="submit"
                className="formulario-editar-tarea__btn"
              >
                Actualizar
              </button>
            </form>
          : todo.text
        }
      </div>

      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon 
          icon={faEdit} 
          className="lista-tareas__icono-accion"
          onClick={() => setShowInput(!showInput)}
        />
        <FontAwesomeIcon 
          icon={faTimes} 
          className="lista-tareas__icono-accion"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
      
    </li>
  )
}
