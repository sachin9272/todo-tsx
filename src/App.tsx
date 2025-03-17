import TodoList from "./components/TodoList";
import { FaPen, FaClipboardList } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="flex items-center bg-red-50 justify-center flex-col">
        <div className="flex items-center bg-yellow-300 justify-center flex-col">
          <div className="flex">
          <FaPen />
          <h1 className="">Todo App</h1>
          <FaClipboardList />
          </div>
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
