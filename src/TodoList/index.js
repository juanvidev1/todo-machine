import "./TodoList.css";
const TodoList = (props) => {
  const renderFunc = props.children || props.render;
  // La propiedad children es una propiedad de React que permite agregar elementos hijos a un componente.
  // En este caso, se agregan los elementos hijos de la lista de tareas.
  // Ver el componente TodoList que tiene dentro de si otros componentes llamadaos TodoItem.
  /** 06-01-2025: Se hace una actualización para el uso de render props y render functions. Aparentemente React itera lo que viene en la prop
   * render y lo organiza de manera automática. Comentado el ul, la app sigue funcionando de forma adecuada.
   */
  return (
    <>
      {props.loading && props.onLoading}
      {props.error && props.onError()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!props.loading &&
        !!props.totalTodos &&
        !props.filteredTodos.length &&
        props.onEmptyFilteredTodos(props.searchValue)}
      {!props.loading && !props.error && props.filteredTodos.map(renderFunc)}

      {/* <ul className="todo-list">{props.children}</ul> */}
    </>
  );
};

export { TodoList };
