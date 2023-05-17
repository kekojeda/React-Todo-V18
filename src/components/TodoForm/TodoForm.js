import { useContext, useState } from "react";
import "./TodoForm.css";
import { MdAddTask } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { TodoContext } from "../../context/TodoContext";

function TodoForm() {
  const { item: todos, saveItem: saveTodos } = useContext(TodoContext);
  const {newTodo, setNewTodo} = useState([])

  let newTodoValue;

  function addTodo(todos, saveTodos){
    let newTodo = {text: newTodoValue, completed: false}
    saveTodos([...todos, newTodo])


  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Escribe tu nuevo ToDo</label>
      <textarea 
      placeholder="Ejemplo de nuevo todo"
      onChange={(event)=> {
        newTodoValue=event.target.value
        console.log(newTodoValue);
      }

      }
      // value={(event)=>event.target.value}
      />

      <div className="TodoForm-ButtonCotainer">
        <button className="TodoForm-button TodoForm-button--cancel">
          <MdClear size={70} />
        </button>
        <button 
        className="TodoForm-button TodoForm-button--add" 
        type="submit"
        onClick={() => addTodo(todos, saveTodos)}
        >
          <MdAddTask size={70} 
          />
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
