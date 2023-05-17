import "./TodoForm.css";
import { MdAddTask } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdClear } from "react-icons/md";

function TodoForm() {
  return (
    <form>
      <label>Escribe tu nuevo ToDo</label>
      <textarea placeholder="Ejemplo de nuevo todo" />

      <div className="TodoForm-ButtonCotainer">
        <button className="TodoForm-button TodoForm-button--cancel">
        <MdClear size={70}/>
        </button>
        <button className="TodoForm-button TodoForm-button--add">
          <MdAddTask size={70}/>
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
