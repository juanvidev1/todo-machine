const TodoItem = ({ todo }) => {
    return (
        <li>
            <span>V</span>
            <p>{ todo }</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };