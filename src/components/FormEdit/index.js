import { useState } from 'react'

import './style.css'


// Componente hijo para editar tarea
const FormEdit = ({ todo, onUpdate, isEditChange }) => {

  // estado de FormEdit
  const [newValue, setNewValue] = useState(todo.tarea)

  const handleSubmit = e => {
    e.preventDefault()
  }

  // el value del input lo almacenamos en newValue
  const handleChange = e => {
    const value = e.target.value
    setNewValue(value)
  }

  // cuando clickamos en actualizar 
  const handleClick = () => {
    
    // ejecutamos 'onUpdate' que nos llega por props
    onUpdate(todo.id, newValue)
    
    // y ponemos de nuevo el estado en false para que muestre la lista
    isEditChange()
  }

  return (
    <form className='formEdit' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='formEdit__input'
        onChange={handleChange} 
        value={newValue} 
      />
      <button
        className='formEdit__button'
        onClick={handleClick}
      >Actualizar</button>
    </form>
  )
}

export default FormEdit