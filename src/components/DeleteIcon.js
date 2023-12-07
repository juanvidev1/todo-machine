import React from "react";
import { IoClose } from "react-icons/io5";

const DeleteIcon = (props) => {
    const size = {
        width: "100%",
        height: "100%"
    }
    return (
    <span className="icon icon-delete" onClick={props.onDelete}>
      <IoClose style={size} />
    </span>
  );

}

export { DeleteIcon };