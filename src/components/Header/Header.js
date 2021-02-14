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
		<Navbar className='purpleBackground'>
			<Navbar.Brand className='openSansText boldText'>
				The Odin Project: CV Builder
			</Navbar.Brand>

			<Navbar.Toggle />

			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text className='lightGreyText openSansText'>
					Build Your Resume!
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
