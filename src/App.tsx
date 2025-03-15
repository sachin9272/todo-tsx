import TodoList from "./components/todoList"
import { FaPen, FaClipboardList } from "react-icons/fa"
function App() {

  return (
    <>
    <div className="App">
      <div className="header">
        <div className="logoside">
        <FaPen/>
        <h1>Todo App</h1>
        <FaClipboardList/>
        </div>
      </div>
    </div>
    <TodoList/>
    </>
  )
}

export default App
