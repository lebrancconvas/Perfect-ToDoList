import React, {useState} from 'react'; 

const Homepage = () => {
	const [todo, setTodo] = useState(''); 
	return (
		<div>
			<h1>Perfect To-Do-List</h1> 
			<form>
				<input type="text" placeholder="Add Task" />
				<button type="submit">
					Add Todo 
				</button>
			</form>
		</div>
	);
}

export default Homepage; 