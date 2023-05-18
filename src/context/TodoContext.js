import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  function addTodo(newTodoValue) {
    let newTodo = { text: newTodoValue, completed: false };
    const newTodos = [...todos];
    newTodos.push(newTodo);
    saveTodos(newTodos);
  }

  function titleMsg(todosTotales, todosCompletados) {
    let msj;
    if (todosTotales > todosCompletados) {
      msj = (
        <h1 className="TodoCounter">
          ¡Vas por buen camino!
          <br />
          Has completado <span>{completedTodos} </span> de{" "}
          <span>{totalTodos} </span> tareas.
        </h1>
      );
    }
    if(todosTotales > 0 && todosTotales === todosCompletados){
      msj = (
        <h1 className="TodoCounter">
          Has completado todas tus tareas pendientes.
          <br />
          ¡Buen trabajo! 
        </h1>
      )
    }if(todosTotales === 0){
      msj = (
        <h1 className="TodoCounter">
          ¡Bienvenido! 
          <br />
          Parece que aún no tienes tareas pendientes.
          
        </h1>
      )

    }

    return msj;
  }

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
        addTodo,
        titleMsg,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
