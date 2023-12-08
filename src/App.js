
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';
import { TodoAuthor } from './components/TodoAuthor';

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

  const itemLS = localStorage.getItem(key);
  let itemProdList;
  if (!itemLS) {
    localStorage.setItem(key, JSON.stringify(initialValue));
    itemProdList = initialValue; 
  } else {
    itemProdList = JSON.parse(itemLS);
  }

  const [item, setItem] = React.useState(itemProdList);

  // Esta función actualiza el estado y además hace persistencia de la infirmación en localStorage
  const saveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
   
  /** Se debe tener en cuenta que respecto a los estados que NO SE PUEDEN PASAR ESTADOS DE HIJOS A PADRES, SÓLO SE PUEDE DE PADRES A HIJOS. En ese sentido es importante
   * crear los estados en el lugar correcto para que la aplicación funcione como es debido.
   */
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
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

  return (
    // React.Fragment es un componente que no renderiza nada, solo sirve para agrupar elementos sin necesidad de utilizar un div. Los <> equivalen a React.Fragment
    <>
      <TodoAuthor />
      {/* Las props se pasan como si fueran atributos de html a los componentes */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            /* Las props onComplete y onDelete son las que permiten actualizar un estado. Ahora, cuando la función requiera un parámetro se debe encapsular dentro de 
            otra función que no se ejecute. (Al invocar la función con los argumentos, esta se ejecutará inmediatamente dando el error de too many re-renders y por eso
            se encapsuló dentro de una función flecha)*/
            onComplete={() => ( completeTask(todo.text) )} 
            onDelete={() => ( deleteTask(todo.text) )} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
