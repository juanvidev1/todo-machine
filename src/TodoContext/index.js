import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) { 
    /** Se debe tener en cuenta que respecto a los estados que NO SE PUEDEN PASAR ESTADOS DE HIJOS A PADRES, SÓLO SE PUEDE DE PADRES A HIJOS. En ese sentido es importante
   * crear los estados en el lugar correcto para que la aplicación funcione como es debido.
   */
  const [searchValue, setSearchValue] = React.useState('');
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [openModal, setOpenModal] = React.useState(true);
  
  // Estos son estados derivados. Nos permiten hacer cálculos con los estados
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // Estos son estados derivados. Nos permiten hacer cálculos con los estados. En el ejemplo se filtran los todos utilizando el valor que el usuario ingrese en el search field
  const filteredTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  /*
  // Esta función actualiza el estado y además hace persistencia de la infirmación en localStorage
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };*/

  const completeTask = (text) => {
    const newTodos = [...todos]; // El spread operator sirve para copiar todos los elementos de un array en otro array. En este caso se copian todos los elementos de todos en newTodos.
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos[index].completed = true;
    saveTodos(newTodos);
  }

  const deleteTask = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  }

 function  addTodo(text) {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
  } 

  return (
    <TodoContext.Provider value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        completedTodos,
        totalTodos,
        filteredTodos,
        completeTask,
        deleteTask,
        saveTodos,
        todos,
        openModal,
        setOpenModal,
        addTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }; 