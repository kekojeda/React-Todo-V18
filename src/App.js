import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { useState } from "react";

//control + spacio en mac para importar ese componente

function useLocalStorage(itemName, initialValue) {
  

  const localStorageItems = localStorage.getItem(itemName);

  let parsedItem;

  if (localStorageItems) {
    parsedItem = JSON.parse(localStorageItems);
  } else {
    parsedItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return [
    item,
    saveItem
    
  ]
}

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
