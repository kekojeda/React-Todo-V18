import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import "./App.css";

function AppUI() {
  const {
    searchedTodos,
    onDelete,
    onComplete,
    loading,
    error,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <main className="main">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
      </main>

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
