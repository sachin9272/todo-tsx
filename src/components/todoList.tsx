import { useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../TodoService";
import TodoForm from "./TodoForm";
const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editedTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  //Function for handling edit Actions

  const handleEditStart = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updateTodo : todo))
      );
      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  //Function to delete todo
  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer"> 
      <div className="">
        <TodoForm setTodos = {setTodos}/>
      </div>
      {todos.map((todo) => (
        <div key={todo.id} className="">
          {editedTodoId === todo.id ? (
            <div className="editedText">
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
                autoFocus={true}
              />
              <button onClick={() => handleEditSave(todo.id)}>Save</button>
              <button onClick={handleEditCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <span>{todo.text}</span>
              <button onClick={() => handleEditStart(todo.id, todo.text)}>
                Edit
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
