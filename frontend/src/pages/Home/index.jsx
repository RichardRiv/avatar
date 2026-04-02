import './styles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ActivityTab from '../Activity/index';
import { FavoriteStack, TechStack } from '../../components/TechStack';

const Home = () => {
	const [activeTab, setActiveTab] = useState('Board');

	const handleTabClicked = (tab) => {
		setActiveTab(tab);
	};

	return (
		<>
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
							<div className="about-me">
								<div className="mini-bio">
									<p>
										Hi there! Glad to have you here! Here you get the chance to
										know me a little bit. Play around and you'll see what skills
										I possess and what I am currently up to! Hope you enjoy your
										stay =)
									</p>
								</div>

								{/* EDUCATION */}
								<div className="educations">
									<h5>Education</h5>
									<p className="education">
										Baruch College Zicklin School of Business
									</p>
									<span className="education-span">
										Received MSIS: June 2024
									</span>
									<p className="education">
										New York City College of Technology (City Tech)
									</p>
									<span className="education-span">
										Received B.Tech: June 2022
									</span>
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

								{/* ALWAYS DISPLAY FOR SCREENS < 1000px & HIDE FROM SCREENS > 1000px*/}
								<div className="mobile-content desktop-hide">
									<ActivityTab />
									<div className="row-2">
										<h4>Favorite Stack</h4>
										<FavoriteStack />
									</div>

									<div className="row-3">
										<h4>Technologies Used</h4>
										<TechStack desktop={false} />
									</div>
								</div>
								{/* MOBILE CONTENT TO ALWAYS DISPLAY */}
							</div>
						</div>
					</div>

					{/* COLUMN 2 */}
					<div className="col-2 mobile-hide">
						{/* NAVBAR */}
						<div className="row-1">
							<div className="row-1-items">
								<span
									className={`row-1-item ${
										activeTab === 'Board' ? 'active' : ''
									}`}
									onClick={() => handleTabClicked('Board')}
								>
									Board
								</span>
								<span
									className={`row-1-item ${
										activeTab === 'Activity' ? 'active' : ''
									}`}
									onClick={() => handleTabClicked('Activity')}
								>
									Activity
								</span>
							</div>
						</div>

						{activeTab === 'Activity' ? (
							<ActivityTab />
						) : (
							/* FAVORITE STACK */
							<>
								<div className="row-2">
									<h4>Favorite Stack</h4>
									<FavoriteStack />
								</div>
								{/* TECHNOLOGIES USED */}
								<div className="row-3 mobile-hide">
									<h4>Technologies Used</h4>
									<TechStack desktop={true} />
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
