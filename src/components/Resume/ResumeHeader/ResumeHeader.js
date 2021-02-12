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
import { React } from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Reusable
import EditField from '../reusable/EditField';
// -----------------------------------------------

function ResumeHeader() {
	return (
		<Row>
			<Col>
				<div className='resumeHeaderContainer'>
					<div className='nameContainer'>
						<EditField value='First Name' tag='h1' />
						<EditField value='Last Name' tag='h1' />
					</div>

					<div className='contactContainer'>
						<EditField value='Email' tag='p' />
						<p>|</p>
						<EditField value='Phone' tag='p' />
						<p>|</p>
						<EditField value='url' tag='p' />
						<p>|</p>
						<EditField value='url' tag='p' />
					</div>
				</div>
			</Col>
		</Row>
	);
}

export default ResumeHeader;
