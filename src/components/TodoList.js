const TodoList = (props) => {
    // La propiedad children es una propiedad de React que permite agregar elementos hijos a un componente.
    // En este caso, se agregan los elementos hijos de la lista de tareas.
    // Ver el componente TodoList que tiene dentro de si otros componentes llamadaos TodoItem.
    return(
        <ul>
            {props.children}
        </ul>
    );
}

export { TodoList };