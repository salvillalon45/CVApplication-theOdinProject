// -----------------------------------------------
//
// AddForm -> AddForm.js
// Desc: AddForm Component for adding new data to
// each of the resume section
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// Reusable
import ActionButton from '../ActionButton';
// -----------------------------------------------

function AddForm(props) {
	const { formLabels, editData } = props;
	let value1;
	let value2;
	let value3;
	let value4;
	let value5;
	let value6;

	let formName1 = formLabels.get(1)[0];
	let placeholder1 = formLabels.get(1)[1];
	let formName2 = formLabels.get(2)[0];
	let placeholder2 = formLabels.get(2)[1];
	let formName3 = formLabels.get(3)[0];
	let placeholder3 = formLabels.get(3)[1];
	let formName4 = formLabels.get(4)[0];
	let placeholder4 = formLabels.get(4)[1];
	let formName5 = formLabels.get(5)[0];
	let placeholder5 = formLabels.get(5)[1];
	let formName6 = formLabels.get(6)[0];
	let placeholder6 = formLabels.get(6)[1];

	if (editData !== '') {
		value1 = editData[formName1];
		value2 = editData[formName2];
		value3 = editData[formName3];
		value4 = editData[formName4];
		value5 = editData[formName5];
		value6 = editData[formName6];
	}

	console.log(editData);

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

			<Form.Group controlId='formName2'>
				<Form.Label htmlFor={formName2}>{formName2}</Form.Label>
				<Form.Control
					type='text'
					name={formName2}
					value={value2}
					placeholder={placeholder2}
					onChange={props.handleChange}
				/>
			</Form.Group>

			<Form.Row>
				<Form.Group as={Col} controlId='formName3'>
					<Form.Label htmlFor={formName3}>{formName3}</Form.Label>
					<Form.Control
						type='text'
						name={formName3}
						value={value3}
						placeholder={placeholder3}
						onChange={props.handleChange}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId='formName4'>
					<Form.Label htmlFor={formName4}>{formName4}</Form.Label>
					<Form.Control
						type='text'
						name={formName4}
						value={value4}
						placeholder={placeholder4}
						onChange={props.handleChange}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Group controlId='formName5'>
				<Form.Label htmlFor={formName5}>{formName5}</Form.Label>
				<Form.Control
					type='text'
					name={formName5}
					value={value5}
					placeholder={placeholder5}
					onChange={props.handleChange}
				/>
			</Form.Group>

			<Form.Group controlId='formName6'>
				<Form.Label htmlFor={formName6}>{formName6}</Form.Label>
				<Form.Control
					type='text'
					name={formName6}
					value={value6}
					as='textarea'
					rows={3}
					placeholder={placeholder6}
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
AddForm.defaultProps = {
	editData: ''
};

export default AddForm;
