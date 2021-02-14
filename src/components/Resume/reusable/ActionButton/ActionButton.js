// -----------------------------------------------
//
// Reusable -> ActionButton.js
// Desc: ActionButton Component for the buttons used
// throughout the application
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, Fragment } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
// -----------------------------------------------

function ActionButton(props) {
	const { text, type, variant } = props;

	function determineButton() {
		if (type === 'submit') {
			return (
				<Button variant={variant} type={type}>
					{text}
				</Button>
			);
		} else {
			return (
				<Button
					variant={variant}
					type={type}
					onClick={() => props.onClickFunction()}
				>
					{text}
				</Button>
			);
		}
	}

	return <div className='buttonContainer'>{determineButton()}</div>;
}

export default ActionButton;
