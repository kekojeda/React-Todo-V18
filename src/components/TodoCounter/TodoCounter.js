import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {

  const {completedTodos, totalTodos,titleMsg} =  useContext(TodoContext)

   
  
  
  return (
    titleMsg(totalTodos,completedTodos)
  );
}

export { TodoCounter };
