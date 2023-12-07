import '../styles/TodoItem.css';

const TodoItem = ({ text, completed }) => {
    return (
        <li className="todo-item">
            {/** En esta línea se le dice a react que si la propiedad completed es true, incluya una clase específica dentro de el elemento html */}
            <span className={`icon icon-check ${completed && "icon-check--active"}`}>
                V
            </span>
            <p className={`todo-item-text ${completed && "todo-item-text--complete"}`}>{ text }</p>
            <span className="icon icon-delete">
                X
            </span>
        </li>
    );
}

export { TodoItem };