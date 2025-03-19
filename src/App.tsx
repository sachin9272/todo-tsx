import TodoList from "./components/TodoList";
import { FaPen, FaClipboardList } from "react-icons/fa";
// #141e30 → #243b55
function App() {
  return (
    <>
      <div className="flex items-center flex-col bg-gradient-to-br from-[#03b7f8]  to-[#585454] h-screen">
        <div className="flex items-center bg-white flex-col  min-h-screen w-full md:max-w-6/12">
          <div className="flex">
          <FaPen className="text-3xl font-bold"/>
          <h1 className="text-3xl font-bold">Todo App</h1>
          <FaClipboardList className="text-3xl font-bold"/>
          </div>
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
