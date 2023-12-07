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
  let completedPercentage = Math.round((completed / total) * 100);
  let text = '';

  if (isNaN(completedPercentage) || completedPercentage === null  || completedPercentage === Infinity) {
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
        Has completado {<span>{completed}</span>} de {<span>{total}</span>} TODOS
      </>
    );
  } else {
    text = (
      <>
        <span>Felicidades!</span> Has completado todos tus TODOS
      </>
    );
  }
  
  // Se crea un string para el color y dependiendo del porcentaje se le asigna un color.
  let bgColor = '';
  if (completedPercentage >= 90) {
    bgColor = '#60ff0a';
  } else if (completedPercentage < 50 && completedPercentage >= 1) {
    bgColor = 'red';
  } else if (completedPercentage >= 50) {
    bgColor = 'yellow';
  } else {
    bgColor = 'whitesmoke';
  }

  const percentageBar = {
    width: `${completedPercentage}%`,
    backgroundColor: bgColor,
    height: '100%',
    borderRadius: '40px',
    // display: 'flex',
    // alignItems: 'center',
    textAlign: 'right',
  }

  const percentageText = {
    padding: '0.5rem',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  }

  return (
    <>
      <h1 className='todo-counter'>
      {text}
      </h1>
      <div className='percentage-container'>
        <div className='percentage-bar' style={percentageBar}>
          <span style={percentageText}>{completedPercentage}%</span>
        </div>
      </div>
    </>
  );
}

export { TodoCounter };