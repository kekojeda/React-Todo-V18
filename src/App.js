import "./App.css";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
//control + spacio en mac para importar ese componente
function App() {
  return (
    <div className="App">
      
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
