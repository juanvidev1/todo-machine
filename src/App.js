import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function App() {
  return (
    <div className="App">
      {/* Las props se pasan como si fueran atributos de html a los componentes */}
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        <TodoItem todo={'Estudiar React'}/>
        <TodoItem todo={'Estudiar JavaScript'} />
        <TodoItem todo={'Estudiar TypeScript'} />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
