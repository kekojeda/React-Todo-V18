import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

function AppUI({
  completedTodos,
  totalTodos,
  searchedTodos,
  onDelete,
  onComplete,
  searchValue,
  setSearchValue,
  loading,
  error
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos /> }

    

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

export { AppUI };
