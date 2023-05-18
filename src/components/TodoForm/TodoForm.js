import { useContext, useState } from "react";
import "./TodoForm.css";
import { MdAddTask } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { TodoContext } from "../../context/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  function onCancel() {
    setOpenModal(false);
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Ejemplo de nuevo todo"
        onChange={onChange}
        value={newTodoValue}
      />

      <div className="TodoForm-ButtonCotainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          <MdClear size={45} />
        </button>

        <button className="TodoForm-button TodoForm-button--add" type="submit">
          <MdAddTask size={45} />
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
