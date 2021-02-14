// -----------------------------------------------
//
// ResumeSkill -> ResumeSkill.js
// Desc: ResumeSkill Component to render a skill
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState, useContext } from 'react';

// Reusable
import ActionButton from '../ActionButton';
import SkillForm from '../SkillForm';

// Theme Context
import { ThemeContext } from '../../ResumeSection';
// -----------------------------------------------

function ResumeSkill(props) {
	const { formLabels, data } = props;
	const [formFlag, setFormFlag] = useState(false);
	const [editData, setEditData] = useState(data);
	const determineMode = useContext(ThemeContext);

	function handleFormState() {
		setFormFlag(!formFlag);
	}

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;

		setEditData({
			...editData,
			[name]: value
		});
	}

	function onSubmit(event) {
		event.preventDefault();
		handleFormState();
	}

	const data1 = editData[formLabels.get(1)[0]];

	return (
		<div className='resumeSkillContainer'>
			<p>{data1}</p>

			<div className='row1InfoContainer'>
				{!formFlag && determineMode === 'Edit' && (
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
