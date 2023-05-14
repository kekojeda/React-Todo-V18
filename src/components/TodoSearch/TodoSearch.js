
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
