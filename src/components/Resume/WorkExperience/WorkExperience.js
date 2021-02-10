// -----------------------------------------------
//
// WorkExperience -> WorkExperience.js
// Desc: WorkExperience Component render all the work experience
// of a use
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState } from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Reusable
import ResumeRow from '../reusable/ResumeRow';
import ActionButton from '../reusable/ActionButton';
import AddForm from '../reusable/AddForm';
// -----------------------------------------------

function WorkExperience() {
	const [resumeData, setResumeData] = useState({
		'Company Name': 'Vusar',
		Location: 'Irvine, CA',
		Role: 'Software Engineer Intern',
		From: 'Sept 2019',
		To: 'Sept 2019',
		Description: 'Full stack working on web apps'
	});
	const [formFlag, setFormFlag] = useState(false);
	const [newResumeRowFlag, setNewResumeRowFlag] = useState(false);
	const [resumeRows, setResumeRows] = useState([]);

	function handleFormState() {
		setFormFlag(!formFlag);
	}

	let formLabels = new Map();
	formLabels.set(1, ['Company Name', 'e.g Khan Academy']);
	formLabels.set(2, ['Location', 'e.g Mountain View, CA']);
	formLabels.set(3, ['From', 'Sept 2019']);
	formLabels.set(4, ['To', 'Sept 2020']);
	formLabels.set(5, ['Role', 'e.g Software Engineer Intern']);
	formLabels.set(6, [
		'Description',
		'Keep it short and simple! Maximum three sentences'
	]);

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;

		setResumeData({
			...resumeData,
			[name]: value
		});
	}

	function onSubmit(event) {
		event.preventDefault();
		generateResumeRow();
	}

	function generateResumeRow() {
		const newResumeRow = <ResumeRow data={resumeData} />;
		setResumeRows([...resumeRows, newResumeRow]);
		handleFormState();
	}

	function showResumeRows() {
		return resumeRows.map((row) => {
			return row;
		});
	}

	return (
		<Row>
			<Col>
				<h2>Work Experience</h2>

				{/* <ResumeRow data={resumeData} /> */}
				{showResumeRows()}

				{formFlag && (
					<AddForm
						handleChange={handleChange}
						formLabels={formLabels}
						handleCancel={handleFormState}
						handleSubmit={onSubmit}
					/>
				)}

				{!formFlag && (
					<ActionButton
						text='Add Work Experience'
						type=''
						onClickFunction={handleFormState}
					/>
				)}
			</Col>
		</Row>
	);
}

export default WorkExperience;
