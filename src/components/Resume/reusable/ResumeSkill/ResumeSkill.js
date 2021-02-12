// -----------------------------------------------
//
// ResumeSkill -> ResumeSkill.js
// Desc: ResumeSkill Component to render a row of info
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState } from 'react';

// Reusable
import ActionButton from '../ActionButton';
import SkillForm from '../SkillForm';
// -----------------------------------------------

function ResumeSkill(props) {
	const { formLabels, data } = props;
	const [formFlag, setFormFlag] = useState(false);
	const [editData, setEditData] = useState(data);
	const resumeData = new Map();

	function handleFormState() {
		setFormFlag(!formFlag);
	}

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		console.log({ name, value });
		setEditData({
			...editData,
			[name]: value
		});
	}

	function onSubmit(event) {
		event.preventDefault();
		handleFormState();
		console.log('After Submit');
	}

	let index = 1;
	Object.entries(props.data).map((prop) => {
		console.log(prop);
		const dataEntry = prop[1];
		resumeData.set(index, dataEntry);
		index += 1;
	});

	let data1 = resumeData.get(1);
	console.table(props);
	console.log({ formLabels });
	console.log({ editData });
	data1 = editData[formLabels.get(1)[0]];

	return (
		<div className='resumeSkillContainer'>
			<p>{data1}</p>

			<div className='row1InfoContainer'>
				{!formFlag && (
					<ActionButton
						variant='success'
						text='Edit'
						type=''
						onClickFunction={handleFormState}
					/>
				)}
			</div>

			{formFlag && (
				<SkillForm
					editData={editData}
					handleChange={handleChange}
					formLabels={formLabels}
					handleCancel={handleFormState}
					handleSubmit={onSubmit}
				/>
			)}
		</div>
	);
}

export default ResumeSkill;
