// -----------------------------------------------
//
// SkillForm -> SkillForm.js
// Desc: SkillForm Component for adding new skills
// for a user
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';

// Reusable
import ActionButton from '../ActionButton';
// -----------------------------------------------

function SkillForm(props) {
	const { formLabels, editData } = props;

	let formName1 = formLabels.get(1)[0];
	let placeholder1 = formLabels.get(1)[1];
	let value1;

	if (editData !== '') {
		value1 = editData[formName1];
	}

	return (
		<Form onSubmit={(event) => props.handleSubmit(event)}>
			<Form.Group controlId='formName1'>
				<Form.Label htmlFor={formName1}>{formName1}</Form.Label>
				<Form.Control
					type='text'
					name={formName1}
					value={value1}
					placeholder={placeholder1}
					onChange={props.handleChange}
				/>
			</Form.Group>

			<ActionButton
				variant='danger'
				text='Cancel'
				type='reset'
				onClickFunction={props.handleCancel}
			/>

			<ActionButton variant='primary' text='Submit' type='submit' />
		</Form>
	);
}

// Set default props
SkillForm.defaultProps = {
	editData: ''
};

export default SkillForm;
