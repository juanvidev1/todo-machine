import React from "react";
import { IoClose } from "react-icons/io5";

const DeleteIcon = (props) => {
    return (
    <span className="icon icon-delete" onClick={props.onDelete}>
      <IoClose />
    </span>
  );

}

export { DeleteIcon };