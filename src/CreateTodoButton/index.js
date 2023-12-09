import './CreateTodoButton.css';


const CreateTodoButton = (props) => {
    return (
        // El evento onClick se dispara cuando se hace click en el botón. Se le puede pasar el parámetro event y se obtendrán ciertas cosas interesantes al respecto
        <button className='todo-button' onClick={ (event) => {
            event.preventDefault();
            props.setOpenModal(state => !state);
        } }>
            +
        </button>
    );
}

export { CreateTodoButton };