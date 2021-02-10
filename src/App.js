// -----------------------------------------------
//
// Src -> App.js
// Desc: Main App Component to run all other components
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import { React, Fragment } from 'react';

// CSS Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
// -----------------------------------------------

function App() {
	return (
		<>
			{/* HEAER */}
			<Header />

			<Resume />

			<Footer />
		</>
	);
}

export default App;
