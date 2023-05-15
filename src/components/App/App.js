import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";
import { AppUI } from "./AppUI";

//control + spacio en mac para importar ese componente

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

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
