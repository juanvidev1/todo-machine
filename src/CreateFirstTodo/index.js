import "./CreateFirstTodo.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function CreateFirstTodo () {
    const { setOpenModal } = React.useContext(TodoContext);

    const createTodo = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <button className="create-first" onClick={createTodo}>
            Crea tu primer TODO! 🎉🎉🎉🎉
        </button>
    )
};

export { CreateFirstTodo };