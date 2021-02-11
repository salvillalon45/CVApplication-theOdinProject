// -----------------------------------------------
//
// ResumeSkill -> ResumeSkill.js
// Desc: ResumeSkill Component to render a row of info
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React } from 'react';
// -----------------------------------------------

function ResumeSkill(props) {
	const resumeData = new Map();

	let index = 1;
	Object.entries(props.data).map((prop) => {
		console.log(prop);
		const dataEntry = prop[1];
		resumeData.set(index, dataEntry);
		index += 1;
	});

	const data1 = resumeData.get(1);
	console.table(props);
	console.log({ data1 });
	return (
		<div className='resumeSkillContainer'>
			<p>{data1}</p>
		</div>
	);
}

export default ResumeSkill;
