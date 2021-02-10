// -----------------------------------------------
//
// Components -> Header.js
// Desc: Header for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React } from 'react';

// Bootstrap
import Navbar from 'react-bootstrap/NavBar';
// -----------------------------------------------

function Header(props) {
	return (
		<Navbar>
			<Navbar.Brand href='#home'>
				The Odin Project: CV Builder
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text>Build Your Resume and Export to PDF</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;