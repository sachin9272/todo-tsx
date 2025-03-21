import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {

    //Get Todos
    getTodos: (): TodoTypes[] => {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    },

    //Adding Todos
    addTodos: (text:string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = {id: Date.now(), text, completed: false};
        const updateTodos = [newTodo, ...todos];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return newTodo;
    },

    //Updating the Todos
    updateTodo: (todo:TodoTypes): TodoTypes => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.map((t) => t.id === todo.id ? todo : t);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },

    //Deleting the Todos
    deleteTodo: (id:number): void => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    }
}

export default TodoService;