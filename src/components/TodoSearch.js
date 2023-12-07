import React from 'react';
import '../styles/TodoSearch.css';
const TodoSearch = () => {
	const [searchValue, setSearchValue] = React.useState('');
	// console.log(`The user wrote: ${searchValue}`);


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