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
import { React, Fragment } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Resume Components
import ResumeHeader from './ResumeHeader';
import WorkExperience from './WorkExperience';
import Education from './Education';
// -----------------------------------------------

function Resume() {
	return (
		<main>
			<section>
				<Container>
					{/* Resume Header */}
					<ResumeHeader />

					{/* Work Experience */}
					<WorkExperience />

					{/* Education */}
					<Education />

					{/* Skills */}
				</Container>
			</section>
		</main>
	);
}

export default Resume;
