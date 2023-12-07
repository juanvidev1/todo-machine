
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';
import { TodoAuthor } from './components/TodoAuthor';

const todosDevList = [
  {
    text: 'Estudiar JavaScript',
    completed: false,
    status: 'open'
  },
  {
    text: 'Estudiar TypeScript',
    completed: false,
    status: 'open'
  },
  {
    text: 'Estudiar React',
    completed: true,
    status: 'completed'
  },
  {
    text: 'Estudiar Vue',
    completed: false,
    status: 'in process'
  }
];

const todosFinalList = [];

function App() {
  /** Se debe tener en cuenta que respecto a los estados que NO SE PUEDEN PASAR ESTADOS DE HIJOS A PADRES, SÓLO SE PUEDE DE PADRES A HIJOS. En ese sentido es importante
   * crear los estados en el lugar correcto para que la aplicación funcione como es debido.
   */
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(todosDevList);
  // const [counterText, setcounterText] = React.useState('');

  // Estos son estados derivados. Nos permiten hacer cálculos con los estados
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // Estos son estados derivados. Nos permiten hacer cálculos con los estados. En el ejemplo se filtran los todos utilizando el valor que el usuario ingrese en el search field
  const filteredTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  const completeTask = (text) => {
    const newTodos = [...todos]; // El spread operator sirve para copiar todos los elementos de un array en otro array. En este caso se copian todos los elementos de todos en newTodos.
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

  const deleteTask = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

	// console.log(`The user wrote: ${searchValue}`);
  // console.log(setTodos);

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
