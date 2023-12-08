import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon'; 

const TodoItem = (props) => {


    return (
        <li className="todo-item">
            
            <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
            <p className={`todo-item-text ${props.completed && "todo-item-text--complete"}`}>{ props.text }</p>
            <DeleteIcon onDelete={props.onDelete}/>
            
        </li>
    );
}

export { TodoItem };