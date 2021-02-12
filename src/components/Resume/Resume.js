// -----------------------------------------------
//
// Resume -> resume.js
// Desc: Resume Component to render all components
// related to resume
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Resume Components
import ResumeHeader from './ResumeHeader';
import ResumeSection from './ResumeSection';

// Reusable
import ActionButton from './reusable/ActionButton';
// -----------------------------------------------

function Resume() {
	const [mode, setMode] = useState(false);

	function handleModeChange() {
		setMode(!mode);
	}

	function determineMode() {
		if (mode === false) {
			return 'Edit';
		}

		return 'Preview';
	}

	// Work Experience Data
	// -----------------------------------------------
	const workExperienceH2 = 'Work Experience';
	const workExperienceStateKeys = {
		'Company Name': '',
		Location: '',
		Role: '',
		From: '',
		To: '',
		Description: ''
	};

	const workExperienceFormLabels = new Map();
	workExperienceFormLabels.set(1, ['Company Name', 'e.g Khan Academy']);
	workExperienceFormLabels.set(2, ['Location', 'e.g Mountain View, CA']);
	workExperienceFormLabels.set(3, ['From', 'e.g Sept 2019']);
	workExperienceFormLabels.set(4, ['To', 'e.g Sept 2020']);
	workExperienceFormLabels.set(5, ['Role', 'e.g Software Engineer Intern']);
	workExperienceFormLabels.set(6, [
		'Description',
		'Keep it short and simple! Maximum three sentences'
	]);

	// Education Data
	// -----------------------------------------------
	const educationH2 = 'Education';
	const educationH2StateKeys = {
		'University or School Name': '',
		Location: '',
		'Degree or Stream': '',
		From: '',
		To: '',
		'Further Descriptions or Achievements': ''
	};
	const educationFormLabels = new Map();
	educationFormLabels.set(1, [
		'University or School Name',
		'e.g Stanford University'
	]);
	educationFormLabels.set(2, ['Location', 'e.g Mountain View, CA']);
	educationFormLabels.set(3, ['From', 'e.g Sept 2015']);
	educationFormLabels.set(4, ['To', 'e.g June 2020']);
	educationFormLabels.set(5, [
		'Degree or Stream',
		"e.g Bachelor's of Arts: Political Science"
	]);
	educationFormLabels.set(6, [
		'Further Descriptions or Achievements',
		'Keep it short and simple! Maximum three sentences'
	]);

	// Skills Data
	// -----------------------------------------------
	const skillsH2 = 'Skills';
	const skillsStateKeys = {
		Skills: ''
	};
	const skillsFormLabels = new Map();
	skillsFormLabels.set(1, ['Skills', 'Shine Your Skills!']);

	return (
		<main>
			<section>
				<Container>
					{/* Preview or Edit Mode */}
					<ActionButton
						text={determineMode() + ' Mode'}
						type=''
						onClickFunction={handleModeChange}
					/>

					{/* Resume Header */}
					<ResumeHeader />

					{/* Work Experience */}
					<ResumeSection
						determineMode={determineMode()}
						buttonText={'Add Work Experience'}
						h2Heading={workExperienceH2}
						stateKeys={workExperienceStateKeys}
						formLabels={workExperienceFormLabels}
						resumeSectionType='1'
					/>

					{/* Education */}
					<ResumeSection
						determineMode={determineMode()}
						buttonText={'Add Education'}
						h2Heading={educationH2}
						stateKeys={educationH2StateKeys}
						formLabels={educationFormLabels}
						resumeSectionType='1'
					/>

					{/* Skills */}
					<ResumeSection
						determineMode={determineMode()}
						buttonText={'Add Skill'}
						h2Heading={skillsH2}
						stateKeys={skillsStateKeys}
						formLabels={skillsFormLabels}
						resumeSectionType='2'
					/>
				</Container>
			</section>
		</main>
	);
}

export default Resume;
