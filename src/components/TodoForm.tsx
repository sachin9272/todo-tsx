import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import { RiAddLine } from "react-icons/ri";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodos(newTodoText);
      setTodos((prevTodo) => [newTodo,...prevTodo]);
      setNewTodoText("");
    }
  };
  return (
    <div className="flex flex-col mt-2 items-center justify-center gap-5 w-full">
      <textarea
        value={newTodoText}
        placeholder="Share your Todo here" 
        onChange={(e) => {
          setNewTodoText(e.target.value);
        }}
        className="flex-grow w-full resize-none overflow-hidden min-h-[60px] h-auto p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleAddTodo}
        className="flex bg-blue-600 rounded p-2 text-white"
      >
        <RiAddLine className="mt-1" />
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
