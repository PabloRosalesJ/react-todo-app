import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export default function Header({setTodosCompleted, todosCompleted, todosLength}) {
  
  const toggleCompleted = () => {
    setTodosCompleted(!todosCompleted)
  }
  
  return (
    <header className="header">
      <h1 className="header__titulo">Listado de tareas <small>({todosLength})</small> </h1>

      {todosCompleted 
      ?
        <button 
          onClick={toggleCompleted}
          className="header__boton"
        >
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      :
      <button 
        onClick={toggleCompleted}
        className="header__boton"
      >
        Mostrar completadas
        <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
      </button>
      }

    </header>
  )
}
