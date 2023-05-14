import "./TodoItem.css";
import { BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        onClick={onComplete}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        <BsFillCheckCircleFill />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <BsFillTrashFill />
      </span>
    </li>
  );
}

export { TodoItem };
