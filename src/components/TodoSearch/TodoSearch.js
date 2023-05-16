
import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../context/TodoContext";

function TodoSearch() {

  const {searchValue, setSearchValue } = useContext(TodoContext)
  return (
    <input
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      value={searchValue}
      className="TodoSearch"
      type="text"
      placeholder="Busca tu Todo"
    />
  );
}

export { TodoSearch };
