import React, { useState } from "react";
import PropTypes from "prop-types";

export function Form(props) {
	const [name, setName] = useState("");

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.addTask(name);
	}

	return (
		<li className="list-group-item p-3 px-5">
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname" />
				<input
					type="text"
					id="fname"
					name="fname"
					placeholder="What needs to be done?"
					value={name}
					onChange={handleChange}
					autoComplete="off"
					className="text-secondary"
				/>
				<button type="submit" id="formbutton">
					add
				</button>
			</form>
		</li>
	);
}

Form.propTypes = {
	addTask: PropTypes.func
};
