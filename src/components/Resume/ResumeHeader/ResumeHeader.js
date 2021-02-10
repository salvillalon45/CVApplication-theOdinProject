// -----------------------------------------------
//
// ResumeHeader -> ResumeHeader.js
// Desc: ResumeHeader Component to render the
// header of the Resume
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
// -----------------------------------------------

function ResumeHeader() {
	return (
		<Row>
			<Col>
				<div className='resumeHeaderContainer'>
					<div className='nameContainer'>
						<h1>First Name</h1>
						<h1>Last Name</h1>
					</div>

					<div className='contactContainer'>
						<p>Email</p>
						<p>|</p>
						<p>(760) 335 - 9012</p>
						<p>|</p>
						<p>URL</p>
						<p>|</p>
						<p>URL</p>
					</div>
				</div>
			</Col>
		</Row>
	);
}

export default ResumeHeader;
