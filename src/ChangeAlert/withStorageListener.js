import React from "react";

export const withStorageListener = (Wrapped) => {
  const WrappedWithStorageListener = (props) => {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (event) => {
      if (event.key === "TODOS_V1") {
        console.log("Cambios en TODOS_V1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.syncTodos();
      setStorageChange(false);
    };

    return <Wrapped show={storageChange} toggleShow={toggleShow} />;
  };
  return WrappedWithStorageListener;
};
