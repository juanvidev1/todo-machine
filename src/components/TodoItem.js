import '../styles/TodoItem.css';

const TodoItem = (props) => {


    return (
        <li className="todo-item">
            {/** En esta línea se le dice a react que si la propiedad completed es true, incluya una clase específica dentro de el elemento html */}
            <span className={`icon icon-check ${props.completed && "icon-check--active"}`}  onClick={props.onComplete}
            >
                V
            </span>
            <p className={`todo-item-text ${props.completed && "todo-item-text--complete"}`}>{ props.text }</p>
            <span className="icon icon-delete" onClick={props.onDelete}>
                X
            </span>
        </li>
    );
}

export { TodoItem };