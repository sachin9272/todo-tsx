import React, {Dispatch, SetStateAction, useState} from 'react'
import TodoService from '../TodoService'
import TodoTypes from '../todo'
import { RiAddLine } from "react-icons/ri";


interface PropTypes{
    setTodos: Dispatch<SetStateAction <TodoTypes[]>>
}

const TodoForm:React.FC<PropTypes> = ({setTodos}) => {
    const [newTodoText, setNewTodoText] = useState<string>("");
    const handleAddTodo = () => {
        if(newTodoText.trim() !== ""){
            const newTodo = TodoService.addTodos(newTodoText);
            setTodos((prevTodo) => [...prevTodo, newTodo])
            setNewTodoText("");
        }
    }
  return (
    <div className='flex mt-2 items-center justify-center gap-5'>
      <input type="text" value={newTodoText} 
      onChange={(e)=>setNewTodoText(e.target.value)}
      autoFocus = {false}
      placeholder='Add a task'
      className='p-2 border-2 border-gray-400 rounded-md '
      />
      <button onClick={handleAddTodo} className='flex bg-blue-600 rounded p-2 text-white'> <RiAddLine />
      Add Todo</button>
    </div>
  )
}

export default TodoForm
