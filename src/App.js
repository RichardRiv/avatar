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

// const textEdit = {
// 	fontStyle: 'italic',
// 	color: 'gray',
// 	lineHeight: '17px',
// };

function App() {
	return (
		<div className="gradient-background">
			<div className="outer-rectangle center">
				<div className="top-rectangle top-center"></div>
				{/* == Profile Pic == */}
				<div className="circle circle-center"></div>
				<div className="inner-circle circle-center"></div>
				{/* == Socials == */}
				<div className="socials-center">
					<div className="social">
						<a
							href="https://www.linkedin.com/in/richard-rivera-/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
						</a>
					</div>
					<div className="social">
						<a
							href="https://github.com/RichardRiv"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FontAwesomeIcon icon={faGithub} size="lg" />{' '}
						</a>
					</div>
					<div className="social">
						<a href="mailto:rrivera1420@gmail.com">
							<FontAwesomeIcon icon={faEnvelope} size="lg" />
						</a>
					</div>
				</div>
				<div className="inner-rectangle inner-center">
					{/* == Name & About == */}
					<p className="name">Richard Rivera</p>
					<hr />
					<p className="about-title">About Me</p>
					<p className="about">
						Graduate student pursuing a Masters in Information Systems looking
						to learn and grow my experience. A passion for solving problems and
						a love for programming leads me to constantly learn and work with
						both front-end and back-end languages.
					</p>
					{/* <p className="education-title">Education</p>
					<p className="education">
						Baruch College Zicklin School of Business <br />
						<span style={textEdit}>Expected: June 2024</span> <br />
						<br />
						New York City College of Technology
						<br />
						<span style={textEdit}>Received: June 2022</span>
					</p> */}
					{/* == Education == */}
					<p className="education-title">Education</p>
					<p className="baruch">
						Baruch College Zicklin School of Business <br />
						<span>Expected: June 2024</span>
					</p>
					<p className="nycct">
						New York City College of Technology
						<br />
						<span>Received: June 2022</span>
					</p>
					{/* == Skills == */}
					<p className="skills-title">Skills</p>
					<div className="skills-align">
						{/* <p className="skills">🟣 JavaScript</p> */}
						{/* <p className="skills">🟣 HTML</p> */}
						{/* <p className="skills">🟣 CSS</p> */}
						{/* <p className="skills">🟣 TypeScript</p> */}
						<p className="skills">🟣 Java</p>
						{/* <p className="skills">🟣 C#</p> */}
						{/* <p className="skills">🟣 Python</p> */}
						<p className="skills">🟣 React.js</p>
						{/* <p className="skills">🟣 Tailwind.CSS</p> */}
						{/* <p className="skills">🟣 W3.CSS</p> */}
						{/* <p className="skills">🟣 Spring Boot</p> */}
						<p className="skills">🟣 SQL</p>
					</div>
					{/* == Roles == */}
					<p className="roles-title">Roles / Experience</p>
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
