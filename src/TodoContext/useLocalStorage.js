import React from "react";

// const todosDevList = [
//   {
//     text: 'Estudiar JavaScript',
//     completed: false,
//     status: 'open'
//   },
//   {
//     text: 'Estudiar TypeScript',
//     completed: false,
//     status: 'open'
//   },
//   {
//     text: 'Estudiar React',
//     completed: true,
//     status: 'completed'
//   },
//   {
//     text: 'Estudiar Vue',
//     completed: false,
//     status: 'in process'
//   }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(todosDevList));
// localStorage.removeItem('TODOS_V1'); // Para borrar el item de localStorage

function useLocalStorage(key, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [syncItem, setSyncItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const itemLS = localStorage.getItem(key);
        let itemProdList;
        if (!itemLS) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          itemProdList = initialValue;
          setItem(itemProdList);
        } else {
          itemProdList = JSON.parse(itemLS);
          setItem(itemProdList);
        }
        setLoading(false);
        setSyncItem(true);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syncItem]);

  const sync = () => {
    setLoading(true);
    setSyncItem(false);
  };

  // Esta función actualiza el estado y además hace persistencia de la infirmación en localStorage
  const saveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  // En el caso de los custom hooks, lo ideal es retornar un objeto si se van a retornar más de dos propiedades
  return { item, saveItem, loading, error, setSyncItem, sync };
}

export { useLocalStorage };
