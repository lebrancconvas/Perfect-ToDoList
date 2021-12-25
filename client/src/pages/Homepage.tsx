import React, {SyntheticEvent, useState} from 'react'; 

const Homepage = () => {
	const [todo, setTodo] = useState('');  
	// const [value, setValue] = useState(''); 
	const todoList: string[] = []; 
	const addTodo = (e: SyntheticEvent) => {
		todoList.push(todo);   	
		// setTodo(e.target.value);         
	}; 

	console.log(`To-Do-List: ${todoList}`); 
	return (
		<div>
			<h1>Perfect To-Do-List</h1> 
			<ol>
				{todoList.map((list, index) => (
					<li key={index}> 
						{list} 
					</li>
				))} 
			</ol>
			<form onSubmit={addTodo}>
				<input type="text" placeholder="Add Task" name="Todo" onChange={e => setTodo(e.target.value)}  />  
				<button type="submit"> 
					Add Todo 
				</button>
			</form>
		</div>
	);
}

export default Homepage; 