/** Los componentes no tienen parámetros como tal, reciben algo que se llama props
 * Las props son un objeto que se le pasa a un componente que trae la información dinámica que se va a renderizar en el component
 * Se puede definir de dos formas:
 * 
 * function TodoCounter(props) {
 *  return (
 *    <h2>
 *      Has completado props.completedCount de props.totalCount TODOS
 *    </h2>
 *  );
 * }
 * 
 * 
 * function TodoCounter({completedCount, totalCount}) {
 *  return (
 *    <h2>
 *      Has completado {completedCount} de {totalCount} TODOS
 *    </h2>
 *  );
 * }
 */
function TodoCounter({ completed, total }) {
  return (
    <h2>
      Has completado {completed} de {total} TODOS
    </h2>
  );
}

export { TodoCounter };