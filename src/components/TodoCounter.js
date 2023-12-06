import '../styles/TodoCounter.css';
/** Los componentes no tienen parámetros como tal, reciben algo que se llama props
 * Las props son un objeto que se le pasa a un componente que trae la información dinámica que se va a renderizar en el component
 * Se puede definir de dos formas:
 * 
 * function TodoCounter(props) {
 *  return (
 *    <h1>
 *      Has completado props.completedCount de props.totalCount TODOS
 *    </h1>
 *  );
 * }
 * 
 * 
 * function TodoCounter({completedCount, totalCount}) {
 *  return (
 *    <h1>
 *      Has completado {completedCount} de {totalCount} TODOS
 *    </h1>
 *  );
 * }
 */
function TodoCounter({ completed, total }) {
  return (
    <h1 className='todo-counter'>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };