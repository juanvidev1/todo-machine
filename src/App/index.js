import React from "react";
// import { TodoProvider } from "../TodoContext";
// import { AppUI } from "./AppUI";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoAuthor } from "../TodoAuthor";
import { TodosLoading } from "../TodosLoading";
import { CreateFirstTodo } from "../CreateFirstTodo";
import { TodosError } from "../TodosError/";
import { Modal } from "../Modal";
import { CreateTodoForm } from "../CreateTodoForm";
import { TodoHeader } from "../TodoHeader";
import { EmptyFilteredTodos } from "../EmptyFilteredTodos";
import { useTodos } from "./useTodos";

function App() {
  const {
    loading,
    error,
    filteredTodos,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoAuthor />
        {/* Las props se pasan como si fueran atributos de html a los componentes */}
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      {/* Las props se pasan como si fueran atributos de html a los componentes, se llaman render props y render functions
      las funciones dentro de las render props son apropiadas, especialmente cuando se van a pasar algunos parámetros como props a los componentes qie retorna
      la función */}
      <TodoList
        loading={loading}
        error={error}
        filteredTodos={filteredTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError />} // En este caso, a pesar de que el componente de error no requiere props, se deja como función, por si se requieren parámeteros en el futuro
        onLoading={<TodosLoading />} // Esta sería una render prop, como el estado loading no necesita props, no se requiere una función para enviar el componente
        onEmptyTodos={() => <CreateFirstTodo />}
        onEmptyFilteredTodos={(searchText) => (
          <EmptyFilteredTodos searchText={searchText} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        )}
      >
        {/* Esta sería una render function */}
        {/* {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        )} */}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <CreateTodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
}

export default App;
