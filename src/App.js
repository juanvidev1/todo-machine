
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';
import { TodoAuthor } from './components/TodoAuthor';

const todos = [
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

function App() {
  return (
    // React.Fragment es un componente que no renderiza nada, solo sirve para agrupar elementos sin necesidad de utilizar un div
    <>
      <TodoAuthor />
      {/* Las props se pasan como si fueran atributos de html a los componentes */}
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
