// -----------------------------------------------
//
// ResumeRow -> ResumeRow.js
// Desc: ResumeRow Component to render a row of info
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState, useContext } from 'react';

// Reusable
import ActionButton from '../ActionButton';
import AddForm from '../AddForm';

// Theme Context
import { ThemeContext } from '../../ResumeSection';
// -----------------------------------------------

function ResumeRow(props) {
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
	const data2 = editData[formLabels.get(2)[0]];
	const data3 = editData[formLabels.get(3)[0]];
	const data4 = editData[formLabels.get(4)[0]];
	const data5 = editData[formLabels.get(5)[0]];
	const data6 = editData[formLabels.get(6)[0]];

	return (
		<div className='resumeRowContainer'>
			<div className='row1InfoContainer'>
				<div className='nameLocationContainer'>
					<p>{data1}</p>
					<p className='divider'>|</p>
					<p>{data2}</p>
				</div>

				<div className='timeFrameContainer'>
					<p>{data3}</p>
					<p className='divider'>-</p>
					<p>{data4}</p>
				</div>
			</div>

			<div className='row2InfoContainer'>
				<div className='titleContainer'>
					<p>{data5}</p>
				</div>

				<div className='descriptionContainer'>
					<p>{data6}</p>
				</div>
			</div>

			<div className='row3InfoContainer'>
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
				<AddForm
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

export default ResumeRow;
