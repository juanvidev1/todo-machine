import "./TodoCounter.css";
import { TodoPercentageBar } from "../TodoPercentageBar";
import React from "react";
// import { TodoContext } from "../TodoContext";
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
function TodoCounter({ completedTodos, totalTodos, loading }) {
  let completedPercentage = Math.round((completedTodos / totalTodos) * 100);
  let text = "";

  if (loading) {
    text = "Cargando...";
    completedPercentage = 0;
  } else if (
    isNaN(completedPercentage) ||
    completedPercentage === null ||
    completedPercentage === Infinity
  ) {
    completedPercentage = 0;
    text = (
      <>
        No hay <span>TODOS</span> pendientes
      </>
    );
  } else if (completedPercentage <= 99) {
    // Con esta estructura creamos un texto html dinámico. Al encerrarlo entre () y <></> Permite utilizar otras etiquetas html como span
    text = (
      <>
        Has completado {<span>{completedTodos}</span>} de{" "}
        {<span>{totalTodos}</span>} TODOS
      </>
    );
  } else {
    text = (
      <>
        <span>Felicidades!</span> Has completado todos tus TODOS
      </>
    );
  }

  return (
    <>
      <h1 className="todo-counter">{text}</h1>
      <TodoPercentageBar
        completedPercentage={completedPercentage}
        loading={loading}
      />
    </>
  );
}

export { TodoCounter };
