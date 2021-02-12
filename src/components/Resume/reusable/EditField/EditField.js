// -----------------------------------------------
//
// EditField -> EditField.js
// Desc: EditField Component to render an input field
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
// -----------------------------------------------

function EditField(props) {
	const [editState, setEditState] = useState({
		text: props.value,
		isEditing: false,
		defaultText: props.value
	});
	const { text, isEditing, defaultText } = editState;

	function handleClick() {
		console.log('Inside handleClick');

		setEditState({
			...editState,
			text: text,
			isEditing: true
		});
	}

	function handleBlur() {
		save();
	}

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		console.log({ name, value });

		setEditState({
			...editState,
			[name]: value
		});
	}

	function enter(event) {
		if (event.keyCode === 13) {
			save();
		}
	}

	function save() {
		setEditState({
			...editState,
			text: text,
			isEditing: false
		});

		if (text === '') {
			setEditState({
				text: defaultText
			});
		}
	}

	// console.table(props);
	// console.table(editState);

	return (
		<>
			{isEditing ? (
				<Form.Group controlId='formName1'>
					<Form.Control
						type='text'
						name='text'
						value={text}
						autoFocus={true}
						onChange={handleChange}
						onBlur={handleBlur}
						onKeyDown={enter}
					/>
				</Form.Group>
			) : (
				<props.tag onClick={() => handleClick()}>{text}</props.tag>
			)}
		</>
	);
}

export default EditField;
