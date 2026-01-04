import { ReactComponent as ReactLogo } from '../../assets/logos/react-svgrepo-com.svg';
import { ReactComponent as DotNetLogo } from '../../assets/logos/dotnet-svgrepo-com.svg';
import { ReactComponent as MSSQLLogo } from '../../assets/logos/msql-server-svgrepo-com.svg';
import { ReactComponent as HtmlLogo } from '../../assets/logos/html-5.svg';
import { ReactComponent as CssLogo } from '../../assets/logos/css-3.svg';
import { ReactComponent as JavaScriptLogo } from '../../assets/logos/javascript.svg';
import { ReactComponent as TypeScriptLogo } from '../../assets/logos/typescript-icon.svg';
import { ReactComponent as GitLogo } from '../../assets/logos/git-icon.svg';
import { ReactComponent as JavaLogo } from '../../assets/logos/java.svg';
import { ReactComponent as CSharpLogo } from '../../assets/logos/c-sharp.svg';
import { ReactComponent as CPlusPlusLogo } from '../../assets/logos/c-plusplus.svg';
import { ReactComponent as PythonLogo } from '../../assets/logos/python.svg';
import { ReactComponent as SassLogo } from '../../assets/logos/sass.svg';
import { ReactComponent as TailwindLogo } from '../../assets/logos/tailwindcss-icon.svg';
import { ReactComponent as SpringLogo } from '../../assets/logos/spring-icon.svg';
import { ReactComponent as JQueryLogo } from '../../assets/logos/jquery-icon.svg';
import { ReactComponent as FirebaseLogo } from '../../assets/logos/firebase-icon.svg';
import { ReactComponent as MongodbLogo } from '../../assets/logos/mongodb-icon.svg';
import { ReactComponent as WordpressLogo } from '../../assets/logos/wordpress-icon-alt.svg';
import { ReactComponent as VscodeLogo } from '../../assets/logos/visual-studio-code.svg';
import { ReactComponent as VsLogo } from '../../assets/logos/visual-studio.svg';
import { ReactComponent as IntellijLogo } from '../../assets/logos/intellij-idea.svg';

import './styles.css';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card';
import ActivityTab from '../Activity/index';

const Home = () => {
	const [btnClicked, setBtnClicked] = useState(false);
	const [activeTab, setActiveTab] = useState('Board');

	const btnRef = useRef(null);

	const handleBtnClick = () => {
		setBtnClicked(!btnClicked);
		btnRef.current.remove();
	};

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
							{/* SOCIALS */}
							<div className="social-container">
								<div className="social-items">
									<div className="social">
										<a href="mailto:rrivera1420@gmail.com">
											<FontAwesomeIcon icon={faEnvelope} size="lg" />
										</a>
										&nbsp; Email
									</div>
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
											<FontAwesomeIcon icon={faGithub} size="lg" />
										</a>
									</div>
								</div>
							</div>

							{/* MINI BIO */}
							<div className="mini-bio">
								<p>
									Welcome to my profile! I hope you take a look around and enjoy
									your stay. Lorem ipsum dolor sit amet, consectetur adipisicing
									elit. Eaque error, architecto dolores, exercitationem
									quibusdam repellendus neque quasi tenetur harum velit possimus
									adipisci illo eos est beatae odit quae laudantium temporibus?
								</p>
							</div>

							{/* EDUCATION */}
							<div className="educations">
								<h5>Education</h5>
								<p className="education">
									Baruch College Zicklin School of Business
								</p>
								<span className="education-span">Received: June 2024</span>
								<p className="education">
									New York City College of Technology (City Tech)
								</p>
								<span className="education-span">Received: June 2022</span>
							</div>

							{/* EXPERIENCE */}
							<div className="experiences">
								<h5>Experiences</h5>
								<div className="experiences-align">
									<span className="experience">🔵 Software Engineer</span>
									<span className="experience">🔵 Teacher Assistant</span>
									<span className="experience">🔵 Full Stack Developer</span>
									<span className="experience">🔵 Game Developer</span>
									<span className="experience">🔵 WordPress Developer</span>
									<span className="experience">🔵 CST Tutor</span>
								</div>
							</div>
						</div>
					</div>

					{/* COLUMN 2 */}
					<div className="col-2">
						{/* NAVBAR */}
						<div className="row-1">
							<div className="row-1-items">
								<span
									className={`row-1-item ${
										activeTab === 'Board' ? 'active' : ''
									}`}
									onClick={() => setActiveTab('Board')}
								>
									Board
								</span>
								<span
									className={`row-1-item ${
										activeTab === 'Activity' ? 'active' : ''
									}`}
									onClick={() => setActiveTab('Activity')}
								>
									Activity
								</span>
								<span
									className={`row-1-item ${
										activeTab === 'Wishlist' ? 'active' : ''
									}`}
									onClick={() => setActiveTab('Wishlist')}
								>
									Wishlist
								</span>
							</div>
							{/* <hr /> */}
						</div>

						{activeTab === 'Activity' ? (
							<ActivityTab />
						) : (
							/* FAVORITE STACK */
							<>
								<div className="row-2">
									<h4>Favorite Stack</h4>
									<div className="row-2-items">
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<ReactLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #512bd4 0%, #7b3ff2 100%)">
											<DotNetLogo className="net-logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #CC2927 0%, #E74C3C 100%)">
											<MSSQLLogo className="sql-logo" />
										</Card>
									</div>
								</div>
								{/* TECHNOLOGIES USED */}
								<div className="row-3">
									<h4>Technologies Used</h4>
									<div className={`row-3-items ${btnClicked ? 'expand' : ''}`}>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<HtmlLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<CssLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<JavaScriptLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<TypeScriptLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<GitLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<JavaLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<CSharpLogo className="logo" />
										</Card>
										<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
											<CPlusPlusLogo className="logo" />
										</Card>
										{btnClicked && (
											<>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<PythonLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<SassLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<TailwindLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<SpringLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<JQueryLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<FirebaseLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<MongodbLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<WordpressLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<VscodeLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<VsLogo className="logo" />
												</Card>
												<Card gradient="linear-gradient(135deg, #20232a 0%, #282c34 100%)">
													<IntellijLogo className="logo" />
												</Card>
											</>
										)}
									</div>
									<button
										ref={btnRef}
										className="row-3-items-see-more"
										onClick={handleBtnClick}
									>
										See more!
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

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
