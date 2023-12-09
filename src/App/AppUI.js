import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoAuthor } from '../TodoAuthor' ;
import { TodosLoading } from '../TodosLoading';
import { CreateFirstTodo } from '../CreateFirstTodo';
import { TodosError } from '../TodosError/';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { CreateTodoForm } from '../CreateTodoForm';

const AppUI = () => {
    const { 
        loading,
        error,
        filteredTodos,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,  
    } = React.useContext(TodoContext); // El todo context ya trae todas las props necesarias con el fin de que el código se vea más limpio

    return (
        <>
      <TodoAuthor />
      {/* Las props se pasan como si fueran atributos de html a los componentes */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading /> }
        {error && < TodosError />}
        {(!loading && filteredTodos.length === 0) && <CreateFirstTodo />}

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

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
            <CreateTodoForm />
        </Modal>
      )}
    </>
    );
}

export { AppUI };