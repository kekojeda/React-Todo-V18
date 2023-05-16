import {  useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";
import { AppUI } from "./AppUI";

//control + spacio en mac para importar ese componente
//localStorage.removeItem('TODOS_V1')
/*
const defaultTodos = [
  { text: 'Tarea test 1', completed: true },
  { text: 'Tarea test 2', completed: true },
  { text: 'Tarea test 3', completed: false },
  { text: 'Tarea test 4', completed: true },
  { text: 'Tarea test 5', completed: false },
  { text: 'Tarea test 6W', completed: true },
]
*/

//

function App() {
  const [searchValue, setSearchValue] = useState("");

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchValueText = searchValue.toLowerCase();
    return todoText.includes(searchValueText);
  });

  const onDelete = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const onComplete = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      onDelete={onDelete}
      onComplete={onComplete}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}

export default App;
