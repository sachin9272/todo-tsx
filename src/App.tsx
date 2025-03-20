import TodoList from "./components/TodoList";
// import { FaPen, FaClipboardList } from "react-icons/fa";
// #141e30 → #243b55
function App() {
  return (
    <>
      <div className="flex items-center flex-col bg-gradient-to-br from-[#03b7f8] via-[#1e90ff] to-[#585454] h-screen overflow-y-auto">
        <div className="flex items-center overflow-y-auto bg-white/80 min-h-screen w-full flex-col md:max-w-6/12">
          <div className="">
          {/* <FaPen className="text-3xl font-bold"/> */}
          <h1 className="text-5xl font-bold text-[#0351f8] font-sans">Todo App</h1>
          {/* <FaClipboardList className="text-3xl font-bold"/> */}
          </div>
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
