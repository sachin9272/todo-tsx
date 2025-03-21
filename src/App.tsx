import TodoList from "./components/TodoList";
// import { FaPen, FaClipboardList } from "react-icons/fa";
// #141e30 → #243b55
import { LuListTodo } from "react-icons/lu";

function App() {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-gradient-to-tl from-blue-300 to-cyan-100 h-screen overflow-y-auto text-black">
        <div className="flex items-center min-w-xs overflow-y-auto md:bg-white bg-white/30 h-auto w-full flex-col md:w-full md:max-w-xl border-2 border-black border-double rounded-lg">
          <div className="flex items-center mt-8">
            {/* <FaPen className="text-3xl font-bold"/> */}
            <LuListTodo className="text-[#0d7dad] text-5xl" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#0344f8] via-[#0c9f89] to-[#0d7dad] text-transparent bg-clip-text font-[Noto Sans]">
              Todo App
            </h1>

            {/* <FaClipboardList className="text-3xl font-bold"/> */}
          </div>
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
