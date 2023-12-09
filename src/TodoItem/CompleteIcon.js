import React from "react";
import { FaCheck } from "react-icons/fa";

const CompleteIcon = (props) => {
    return (
    /** En esta línea se le dice a react que si la propiedad completed es true, incluya una clase específica dentro de el elemento html */
    <span className={`icon icon-check ${props.completed && "icon-check--active"}`} onClick={props.onComplete}>
      <FaCheck />
    </span>
  );

}

export { CompleteIcon };