import './EmptyTodos.css'

function EmptyTodos(){

    return(
        <>
        <div className="emptyTodo">
        <p>¡Hola! No tienes tareas pendientes en este momento. Para comenzar, crea una nueva tarea haciendo clic en el botón '+'. </p>
        <p>¡Empieza a planificar tus actividades ahora mismo!</p>
            </div>
        </>
    )
}

export {EmptyTodos}