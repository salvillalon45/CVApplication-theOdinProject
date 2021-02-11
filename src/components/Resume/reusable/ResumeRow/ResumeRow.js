// -----------------------------------------------
//
// ResumeRow -> ResumeRow.js
// Desc: ResumeRow Component to render a row of info
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState } from 'react';

// Reusable
import ActionButton from '../ActionButton';
import AddForm from '../AddForm';
// -----------------------------------------------

function ResumeRow(props) {
	const { stateKeys, formLabels, data } = props;
	const [formFlag, setFormFlag] = useState(false);
	const [editData, setEditData] = useState(data);
	console.table(editData);
	const resumeData = new Map();

	let index = 1;
	Object.entries(data).map((prop) => {
		console.log(prop);
		const dataEntry = prop[1];
		resumeData.set(index, dataEntry);
		index += 1;
	});

	let data1 = resumeData.get(1);
	let data2 = resumeData.get(2);
	let data3 = resumeData.get(3);
	let data4 = resumeData.get(4);
	let data5 = resumeData.get(5);
	let data6 = resumeData.get(6);

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
		data1 = editData[formLabels.get(1)[0]];
		data2 = editData[formLabels.get(2)[0]];
		data3 = editData[formLabels.get(3)[0]];
		data4 = editData[formLabels.get(4)[0]];
		data5 = editData[formLabels.get(5)[0]];
		data6 = editData[formLabels.get(6)[0]];
		// if (resumeSectionType === '1') {
		// 	generateResumeRow();
		// } else {
		// 	generateSkillsRow();
		// }
		handleFormState();
		console.log('After Submit');
		console.log({ data1, data2, data3, data4, data5, data6 });
	}
	console.log('What is editData form labels');
	console.log(editData[formLabels.get(1)[0]]);
	console.log(formLabels);
	console.log({ data1, data2, data3, data4, data5, data6 });
	return (
		<div className='resumeRowContainer'>
			<div className='row1InfoContainer'>
				<div className='nameLocationContainer'>
					<p>{editData[formLabels.get(1)[0]]}</p>
					<p>|</p>
					{/* <p>{data2}</p> */}
					<p>{editData[formLabels.get(2)[0]]}</p>
				</div>

				<div className='timeFrameContainer'>
					{/*{ <p>{data3}</p> */}
					<p>{editData[formLabels.get(3)[0]]}</p>
					{/* <p>{data4}</p> */}
					<p>{editData[formLabels.get(4)[0]]}</p>
				</div>
			</div>

			<div className='row2InfoContainer'>
				<div className='titleContainer'>
					{/* <p>{data5}</p> */}
					<p>{editData[formLabels.get(5)[0]]}</p>
				</div>

				<div className='descriptionContainer'>
					{/* <p>{data6}</p> */}
					<p>{editData[formLabels.get(6)[0]]}</p>
				</div>
			</div>

			<div className='row3InfoContainer'>
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
