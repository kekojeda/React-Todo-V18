import "./NotFoundTodo.css";

function NotFoundTodo() {
  return (
    <>
      <div className="not-found-todo">
        <p>
          Lo sentimos, no se encontraron resultados para la tarea buscada. Por
          favor, verifica el nombre o intenta buscar otra tarea. Recuerda que
          puedes agregar nuevas tareas si no existen en la lista actual.{" "}
        </p>
        <p>¡Sigue organizando tus actividades!</p>
      </div>
    </>
  );
}

export { NotFoundTodo };
