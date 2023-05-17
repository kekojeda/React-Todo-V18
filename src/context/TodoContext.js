import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)

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
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchedTodos,
        onDelete,
        onComplete,
        searchValue,
        setSearchValue,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
