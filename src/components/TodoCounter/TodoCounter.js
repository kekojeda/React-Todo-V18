import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {

  const {completedTodos, totalTodos} =  useContext(TodoContext)
  // const contextTodo =  useContext(TodoContext)
  
  return (
    <h1 className="TodoCounter">
      Has Completado <span>{completedTodos} </span>
      de <span>{totalTodos} </span>ToDos
    </h1>
  );
}

export { TodoCounter };
