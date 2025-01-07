import React from "react";
import { withStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {
  React.useEffect(() => {
    toggleShow();
  }, [show]); // eslint-disable-line

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p className="ChangeAlert-p">Hubo cambios</p>
          {/* <button className="ChangeAlert-btn" onClick={toggleShow}>
            Volver a cargar la información
          </button> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
