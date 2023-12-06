import '../styles/TodoSearch.css';
const TodoSearch = () => {
	return (
		<div className="search">
			<label className="search-todo-label">Busca un TODO</label>
			<input type="text" placeholder="Encuentra un TODO" />
		</div>
	);
}

export { TodoSearch };