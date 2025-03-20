import { useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../TodoService";
import TodoForm from "./TodoForm";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { ImCross } from "react-icons/im";

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
    <div className="flex align-center flex-col p-10">
      <div className="max-w-full">
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="max-w-full flex justify-center items-center flex-wrap gap-2 mt-5">
      
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex flex-wrap w-full items-center justify-between p-2 border-b-2 border-gray-400"
          >
            {editedTodoId === todo.id ? (
              <div className="flex gap-10  w-full items-center justify-between">
                <div className="flex gap-8">
                  <input
                    type="text"
                    value={editedTodoText}
                    onChange={(e) => setEditedTodoText(e.target.value)}
                    autoFocus={true}
                  />
                  <div className="flex gap-2">
                    <button onClick={() => handleEditSave(todo.id)}>
                      <SiTicktick className="text-green-500" />
                    </button>
                    <button onClick={handleEditCancel}>
                      <ImCross className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex  items-center justify-between gap-10">
                <div className="flex flex-wrap w-full">
                  <span>{todo.text}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEditStart(todo.id, todo.text)}>
                    <FiEdit className="text-green-500" />
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    <MdDelete className="text-red-500" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
