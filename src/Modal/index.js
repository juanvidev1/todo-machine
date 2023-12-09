import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal ({ children }) {
    const modalDiv = document.getElementById("modal");

    return ReactDOM.createPortal(
    <div className="modal-background">
        {children}
    </div>,
    modalDiv
  );

}

export { Modal };