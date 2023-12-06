import '../styles/TodoItem.css';

import check from '../assets/check-mark-svgrepo-com.svg';
import deleteIcon from '../assets/close-error-svgrepo-com.svg';

const TodoItem = ({ text, completed }) => {
    return (
        <li className="list-todo-item">
            <span className="green-check">
                <img src={ check } alt="check" />
            </span>
            <p className="todo-text">{ text }</p>
            <span className="todo-delete">
                <img src={ deleteIcon } alt="delete" />
            </span>
        </li>
    );
}

export { TodoItem };