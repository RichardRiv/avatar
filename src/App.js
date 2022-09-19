import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import {
// 	solid,
// 	regular,
// 	brands,
// 	icon,
// } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
	return (
		<div>
			<div className="outer-rectangle center">
				<div className="top-rectangle top-center"></div>
				<div className="circle circle-center"></div>
				<div className="inner-circle circle-center"></div>
				<div className="socials-center">
					<div className="social">
						<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
					</div>
					<div className="social">
						<FontAwesomeIcon icon={faGithub} size="lg" />
					</div>
					<div className="social">
						<FontAwesomeIcon icon={faEnvelope} size="lg" />
					</div>
				</div>
				<div className="inner-rectangle inner-center">
					<p className="name">Richard Rivera</p>
					<hr />
					<p className="about-title">About Me</p>
					<p className="about">Random Text</p>
					<p className="roles-title">Prev. Roles</p>
					<div className="roles-align">
						<p className="role">🔵 Game Developer</p>
						<p className="role">🔵 WordPress Developer</p>
						<p className="role">🔵 CST Tutor</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
