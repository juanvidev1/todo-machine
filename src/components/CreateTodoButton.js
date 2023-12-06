import '../styles/CreateTodoButton.css';
import buttonImage from '../assets/add-file-5-svgrepo-com.svg';

const CreateTodoButton = () => {
    return (
        <div className="button-container">
            <button>
                <img src={ buttonImage } alt="Add task" />
            </button>
        </div>
    );
}

export { CreateTodoButton };