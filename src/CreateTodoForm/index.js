import React from "react";
import './CreateTodoForm.css';
import { TbPencilCancel } from "react-icons/tb";
import { RiAddBoxFill } from "react-icons/ri";
import { TodoContext } from "../TodoContext";

function CreateTodoForm() {
    const { setOpenModal, addTodo, } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    /** Estas son las funciones que se manenan en el formulario y sus botones */
    // Esta función se encarga de cerrar el modal y limpiar el input
    const handleCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    // Esta función se encarga de crear un nuevo todo y limpiar el input
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    }

    // Esta función se encarga de actualizar el input con el valor del input del usuario
    const handleChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <form className="form-create-todo" onSubmit={handleSubmit}>
            <textarea id="task" className="form-textarea" placeholder="Crea un TODO" onChange={handleChange} required />
            <div className="form-buttons-container">
                <button type="submit" className="form-btn btn-form-create">
                <RiAddBoxFill />
                </button>
                <button type="button" className="form-btn btn-form-cancel" onClick={handleCancel}>
                    <TbPencilCancel />
                </button>
            </div>
        </form>
    );
}

export { CreateTodoForm };