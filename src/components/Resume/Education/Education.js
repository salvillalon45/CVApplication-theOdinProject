// -----------------------------------------------
//
// Education -> Education.js
// Desc: Education Component render all the education
// of a user
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
// -----------------------------------------------

function Education() {
	const [educationData, setEducationData] = useState({
		companyName: 'Vusar',
		location: 'Irvine, CA',
		title: 'Software Engineer Intern',
		timeframe: ['Sept 2019', 'Sept 2020'],
		description: 'Full stack working on web apps'
	});

	return (
		<Row>
			<Col>
				<h2>Education</h2>

				<ResumeRow data={educationData} />
			</Col>
		</Row>
	);
}

export default Education;
