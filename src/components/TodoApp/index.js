import { useState } from 'react'
import Todo from '../Todo'

import './style.css'


const TodoApp = () => {

  // Estados de TodoApp, uno para cada tarea y otro para la lista de tareas
  const [tarea, setTarea] = useState('')
  const [todos, setTodos] = useState([])

  // Asignamos el value del input al state 'tarea'
  const handleChange = event => {
    setTarea(event.target.value)
  }

  // Cuando clickamos el botón del form
  const handleSubmit = e => {

    // prevenimos el comportamiento por defecto
    e.preventDefault()
    
    // creamos un objeto con el id, la tarea y si esta está completada
    const newTodo = {
      id: crypto.randomUUID(),
      tarea,
      completed: false
    }

    // y lo añadimos a la lista de tareas
    setTodos([...todos, newTodo])

    // de paso volvemos a poner en blanco el input para que sea más cómodo
    setTarea('')
  }

  // Cuando clickamos el botón de actualizar en el componente Todo
  const handleUpdate = (id, value) => {
    
    // buscamos en 'todos' el que coincida con el id
    const tareaFind = todos.find(tarea => tarea.id === id)

    // Cuando lo encuentra le cambiamos el valor 'tarea' por el 'value' que recibe
    tareaFind.tarea = value
  }

  // Cuando clickamos el botón de eliminbar en el componente Todo
  const handleDelete = id => {
    // devolvemos todos excepto el que coincide con el id
    const temp = todos.filter(todo => todo.id !== id )
    // guardamos el resultado en todos
    setTodos(temp)
  }

  return (
    <div className="todoApp">

      {/* Formulario */}
      <form className="todoApp__form" onSubmit={handleSubmit}>

        {/* input para escribir la tarea */}
        <input 
          className="todoApp__input" 
          value={tarea}
          onChange={handleChange} 
        />
        {/* botón para submit */}
        <input 
          className="todoApp__button" 
          type="submit" 
          value="Añadir tarea" 
        />
      </form>
      
      {/* Mostramos la lista de tareas */}
      <div className='todoApp__lista'>
        { // Iteramos por cada tarea que tenemos en el state 'todos'
          todos.map( todo => (
            // Por cada tarea iteremos vamos a mostrar un componente Todo
            <Todo 
              key={todo.id} 
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </div>
    
    </div>
  )
}

export default TodoApp
