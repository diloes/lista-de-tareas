import { useState } from "react"

const Todo = ({ todo, onUpdate, onDelete }) => {

  // State(boolean)
  const [isEdit, setIsEdit] = useState(false)

  // Componente hijo para editar tarea
  const FormEdit = () => {

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
      setIsEdit(false)
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

  // Componente hijo para mostrar tarea
  const TodoElement = () => {
    return (
      <div className='todoElement'>
        {todo.tarea}
        <button onClick={() => setIsEdit(true)}>Editar</button>
        <button onClick={() => onDelete(todo.id)}>Eliminar</button>
      </div>
    )
  }

  return (
    <div>
      {/* Si isEdit es true mostramos FormEdit si no, TodoElement */}
      { isEdit ? <FormEdit /> : <TodoElement /> }
    </div>
  );
}

export default Todo