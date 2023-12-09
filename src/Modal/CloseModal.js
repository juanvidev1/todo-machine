import React from "react";
import { TodoContext } from "../TodoContext";
import { TbPencilCancel } from "react-icons/tb";

const CloseModal = () => {
    const { setOpenModal } = React.useContext(TodoContext);

    return (
        <span className="close-modal" onClick={() => (setOpenModal(false))}>
            <TbPencilCancel />
        </span>
    );
};

export { CloseModal };