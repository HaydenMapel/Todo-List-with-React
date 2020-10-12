import React from "react";
import PropTypes from "prop-types";

export function ToDo(props) {
	return (
		<li className="list-group-item p-3 px-5">
			<div className="tododiv text-secondary">
				<label className="todo-label" htmlFor={props.id}>
					{props.name}
				</label>
				<button
					type="button"
					className="btn btn-outline-light font-weight-bold text-danger deletebtn p-0"
					onClick={() => props.deleteTask(props.id)}>
					X
				</button>
			</div>
		</li>
	);
}
ToDo.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	deleteTask: PropTypes.func
};
