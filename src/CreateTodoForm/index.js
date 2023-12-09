import React from "react";
import './CreateTodoForm.css';
import { TbPencilCancel } from "react-icons/tb";
import { RiAddBoxFill } from "react-icons/ri";
import { TodoContext } from "../TodoContext";

function CreateTodoForm({ handleChange, handleSubmit, handleCancel }) {
    const { setOpenModal } = React.useContext(TodoContext); 

    handleCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    return (
        <form className="form-create-todo">
            <textarea id="task" className="form-textarea" placeholder="Crea un TODO" onChange={handleChange} />
            <div className="form-buttons-container">
                <button type="submit" className="form-btn btn-form-create" onClick={handleSubmit}>
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