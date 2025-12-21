import ReactLogo from '../../assets/logos/react-svgrepo-com.svg';
import DotNetLogo from '../../assets/logos/dotnet-svgrepo-com.svg';
import MSSQLLogo from '../../assets/logos/msql-server-svgrepo-com.svg';
// import TSLogo from '../../assets/logos/typescript-logo-svgrepo-com.svg';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	return (
		<>
			{/* <div className="background"></div> */}
			<div className="container">
				<div className="outer-box">
					{/* COLUMN 1 */}
					<div className="col-1">
						<div className="banner"></div>
						<div className="profile-pic"></div>
						<div className="profile">
							<h2>Richard Rivera</h2>
							<div className="social-container">
								<div className="social-items">
									<div className="social">
										<a href="mailto:rrivera1420@gmail.com" className="social">
											<FontAwesomeIcon icon={faEnvelope} size="lg" />
										</a>
									</div>
									<a
										href="https://www.linkedin.com/in/richard-rivera-/"
										target="_blank"
										rel="noreferrer noopener"
										className="social"
									>
										<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
									</a>
									<div className="social">
										<a
											href="https://github.com/RichardRiv"
											target="_blank"
											rel="noreferrer noopener"
											className="social"
										>
											<FontAwesomeIcon icon={faGithub} size="lg" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* COLUMN 2 */}
					<div className="col-2">
						<div className="row-1">
							<div className="row-1-items">
								<p>Board</p>
								<p>Activity</p>
								<p>Wishlist</p>
							</div>
							<hr />
						</div>
						<div className="row-2">
							<h4>Favorite Stack</h4>
							<div className="row-2-items">
								<img src={ReactLogo} alt="React Logo" />
								<img src={DotNetLogo} alt=".NET Logo" />
								<img src={MSSQLLogo} alt="Microsoft SQL Server Logo" />
							</div>
						</div>
						<div className="row-3">
							<h4>Languages Used</h4>
							<div className="row-3-items">
								{/* TODO: Add Languages Logos */}
								{/* <img src={TSLogo} alt="TypeScript Logo" /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

		// ======= OLD CODE =======
		// <div className="gradient-background">
		// 	<div className="outer-rectangle center">
		// 		<div className="top-rectangle top-center"></div>
		// 		{/* == Profile Pic == */}
		// 		<div className="circle circle-center"></div>
		// 		<div className="inner-circle circle-center"></div>
		// 		{/* == Socials == */}
		// 		<div className="socials-center">
		// 			<div className="social">
		// 				<a
		// 					href="https://www.linkedin.com/in/richard-rivera-/"
		// 					target="_blank"
		// 					rel="noreferrer noopener"
		// 				>
		// 					<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
		// 				</a>
		// 			</div>
		// 			<div className="social">
		// 				<a
		// 					href="https://github.com/RichardRiv"
		// 					target="_blank"
		// 					rel="noreferrer noopener"
		// 				>
		// 					<FontAwesomeIcon icon={faGithub} size="lg" />{' '}
		// 				</a>
		// 			</div>
		// 			<div className="social">
		// 				<a href="mailto:rrivera1420@gmail.com">
		// 					<FontAwesomeIcon icon={faEnvelope} size="lg" />
		// 				</a>
		// 			</div>
		// 		</div>
		// 		<div className="inner-rectangle inner-center">
		// 			{/* == Name & About == */}
		// 			<p className="name">Richard Rivera</p>
		// 			<hr />
		// 			<p className="about-title">About Me</p>
		// 			<p className="about">
		// 				Graduate student pursuing a Masters in Information Systems looking
		// 				to learn and grow my experience. A passion for solving problems and
		// 				a love for programming leads me to constantly learn and work with
		// 				both front-end and back-end languages.
		// 			</p>
		// 			{/* == Education == */}
		// 			<p className="education-title">Education</p>
		// 			<p className="baruch">
		// 				Baruch College Zicklin School of Business <br />
		// 				<span>Expected: June 2024</span>
		// 			</p>
		// 			<p className="nycct">
		// 				New York City College of Technology
		// 				<br />
		// 				<span>Received: June 2022</span>
		// 			</p>
		// 			{/* == Skills == */}
		// 			<p className="skills-title">Skills</p>
		// 			<div className="skills-align">
		// 				<p className="skills">🟣 Java</p>
		// 				<p className="skills">🟣 React.js</p>
		// 				<p className="skills">🟣 SQL</p>
		// 			</div>
		// 			{/* == Roles == */}
		// 			<p className="roles-title">Roles / Experience</p>
		// 			<div className="roles-align">
		// 				<p className="role">🔵 Full Stack Developer</p>
		// 				<p className="role">🔵 Game Developer</p>
		// 				<p className="role">🔵 WordPress Developer</p>
		// 				<p className="role">🔵 CST Tutor</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Home;
