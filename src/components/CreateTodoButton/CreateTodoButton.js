import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, openModal }) {
  return (
    <button
      onClick={() => {
        setOpenModal(!openModal);
      }}
      className="CreateTodoButton"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
