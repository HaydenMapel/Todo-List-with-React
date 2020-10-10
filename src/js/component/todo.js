import React from "react";
import PropTypes from "prop-types";

export function ToDo(props) {
	return (
		<li className="list-group-item">
			<div className="c-cb">
				<label className="todo-label" htmlFor={props.id}>
					{props.name}
				</label>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => props.deleteTask(props.id)}>
					Danger
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
