import './styles.css';
import codingLogo from '../../assets/logos/code-svgrepo-com.svg';

const GitHubActivity = () => {
	return (
		<>
			<div className="github-item">
				<div className="github-span-container">
					<div className="github-span-group">Coding</div>
					<span className="github-three-dots">. . .</span>
				</div>

				<div className="github-container">
					<img className="github-art" alt="Album Art" src={codingLogo} />
					<div className="github-info">
						<div>Github</div>
						<div className="github-author">RichardRiv</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GitHubActivity;
