import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';
const TodoSearch = () => {

	const {
		searchValue,
        setSearchValue,
	} = React.useContext(TodoContext);

	return (
		<input type="text" 
		placeholder="Encuentra un TODO"
		value={searchValue} 
		className='todo-search' onChange={(event) => {
			/*console.log('Wrote in search')
			console.log(event.target.value) // Esto nos retornará el valor escrito en el input de texto*/
			setSearchValue(event.target.value);
		}} />
	);
}

export { TodoSearch };