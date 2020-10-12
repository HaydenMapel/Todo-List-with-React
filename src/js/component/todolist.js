import React, { useState } from "react";
import { ToDo } from "./todo.js";
import { Form } from "./form.js";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { EmptyList } from "./emptylist.js";

export function ToDoList(props) {
	const [tasks, setTasks] = useState(props.tasks);
	let emptylist = "";
	if (tasks.length == 0) {
		emptylist = <EmptyList />;
	}
	function addTask(name) {
		const newTask = { id: "todo-" + nanoid(), name: name };
		setTasks([...tasks, newTask]);
	}
	function deleteTask(id) {
		const remainingTasks = tasks.filter(task => id !== task.id);
		setTasks(remainingTasks);
	}
	const taskList = tasks.map(task => (
		<ToDo
			id={task.id}
			name={task.name}
			key={task.id}
			deleteTask={deleteTask}
		/>
	));

	return (
		<div className="container">
			<div className="listtitle">
				<h1 className="text-center display-2" id="todoheader">
					todos
				</h1>
			</div>
			<div className="listcontainer">
				<ul className="list-group">
					<Form addTask={addTask} />
					{emptylist}
					{taskList}
				</ul>
			</div>
		</div>
	);
}
ToDoList.propTypes = {
	tasks: PropTypes.array
};
