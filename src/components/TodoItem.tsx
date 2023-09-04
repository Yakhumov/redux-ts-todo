import React from 'react'
import { useAppDispatch } from '../hook'                           
import {removeTodo, handleChange} from '../store/todoSlice'

interface TodoItemProps{
    id: string ,
    title: string,
    completed: boolean
}

const TodoItem: React.FC <TodoItemProps> = (props) => {    
 const {id, title,completed} = props
 
 const dispatch = useAppDispatch()  

  return (
    <li>
         <input type="checkbox"  checked={completed} onChange={() => dispatch(handleChange(id))}/>
            <span>{title}</span>
            <span
              className="del"
              style={{ color: "red" }}
              onClick={() => dispatch(removeTodo(id))}>                      
              &times;
            </span>
    </li>
  )
}

export default TodoItem 
