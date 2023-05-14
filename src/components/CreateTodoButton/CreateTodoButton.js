import "./CreateTodoButton.css";

function CreateTodoButton() {
 

  return (
    <button 
    onClick={ (event) => {
        console.log("le diste click")
        console.log(event.target.value)
    }} 
    className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
