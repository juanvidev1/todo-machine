import "./CreateFirstTodo.css";
import React from "react";

function CreateFirstTodo({ setOpenModal }) {
  const createTodo = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="create-first" onClick={createTodo}>
      Crea tu primer TODO! 🎉🎉🎉🎉
    </button>
  );
}

export { CreateFirstTodo };
