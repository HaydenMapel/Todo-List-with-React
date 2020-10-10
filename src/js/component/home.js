import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./todolist.js";

const DATA = [
	// { id: "todo-0", name: "Eat" },
	// { id: "todo-1", name: "Sleep" },
	// { id: "todo-2", name: "Repeat" }
];
//create your first component
export function Home() {
	return (
		<div>
			<ToDoList tasks={DATA} />
		</div>
	);
}
