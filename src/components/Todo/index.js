import { useState } from "react"
import FormEdit from '../FormEdit'
import TodoElement from '../TodoElement'

import './style.css'

const Todo = ({ todo, onUpdate, onDelete }) => {

  // State(boolean)
  const [isEdit, setIsEdit] = useState(false)

  // Cambiar estado 'isEdit' desde los componentes hijos 
  const isEditChange = () => {
    setIsEdit(!isEdit)
  }

  return (
    <div className='todo'>
      {/* Si isEdit es true mostramos FormEdit si no, TodoElement */}
      { isEdit ? 
          <FormEdit 
            todo={todo} 
            onUpdate={onUpdate}
            isEditChange={isEditChange}
          /> 
        : <TodoElement 
            todo={todo}
            onDelete={onDelete}
            isEditChange={isEditChange}
          /> 
      }
    </div>
  );
}

export default Todo