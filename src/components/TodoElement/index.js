import './style.css'


// Componente hijo de Todo para mostrar tarea
const TodoElement = ({ todo, onDelete, isEditChange }) => {

  return (
    <div className='todoElement'>
      <span className='todoElement__span'>{todo.tarea}</span>
      <button className='todoElement__button' onClick={isEditChange}>Editar</button>
      <button className='todoElement__button--delete' onClick={() => onDelete(todo.id)}>Eliminar</button>
    </div>
  )
}

export default TodoElement