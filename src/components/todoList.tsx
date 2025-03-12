import React,{useState} from 'react'
import TodoTypes from '../todo'
import TodoService from '../TodoService'
const TodoList = () => {
    const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
    const [editedTodoId, setEditedTodoId] = useState<number | null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string>("");

    //Function for handling edit Actions

    const handleEditStart = (id:number, text:string) => {
        setEditedTodoId(id);
        setEditedTodoText(text);
    }

    const handleEditCancel = () => {
        setEditedTodoId(null);
        setEditedTodoText("");
    }

    const handleEditSave =(id:number) => {
        if(editedTodoText.trim() !== ""){
            const updateTodo = TodoService.updateTodo({
                id,
                text: editedTodoText,
                completed: false
            });
            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)));
            setEditedTodoId(null);
            setEditedTodoText("");
        }
    };

    //Function to delete todo
    const handleDeleteTodo = (id:number) => {
        TodoService.deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

  return (
    <div className=''>
      
    </div>
  )
}

export default TodoList
