// -----------------------------------------------
//
// ResumeRow -> ResumeRow.js
// Desc: ResumeRow Component to render a row of info
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

function ResumeRow(props) {
	const resumeData = new Map();

	let index = 1;
	Object.entries(props.data).map((prop) => {
		console.log(prop);
		const dataEntry = prop[1];
		resumeData.set(index, dataEntry);
		index += 1;
	});

	const data1 = resumeData.get(1);
	const data2 = resumeData.get(2);
	const data3 = resumeData.get(3);
	const data4 = resumeData.get(4);
	const data5 = resumeData.get(5);
	const data6 = resumeData.get(6);

	return (
		<div className='resumeRowContainer'>
			<div className='row1InfoContainer'>
				<div className='nameLocationContainer'>
					<p>{data1}</p>
					<p>|</p>
					<p>{data2}</p>
				</div>

				<div className='timeFrameContainer'>
					<p>{data3}</p>
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
		</div>
	);
}

export default ResumeRow;
