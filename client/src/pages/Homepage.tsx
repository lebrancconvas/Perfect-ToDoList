import React, {SyntheticEvent, useState} from 'react'; 
import {Form, Input, Button} from 'antd'; 

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
			<Form>   
				<Form.Item label="Todo" name="todo">
					<Input /> 
				</Form.Item> 
				<button type="submit"> 
					Add Todo 
				</button>
			</Form>
		</div>
	);
}

export default Homepage; 