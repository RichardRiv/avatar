import './styles.css';
import SpotifyActivity from '../../components/SpotifyActivity';
import GitHubActivity from '../../components/GitHubActivity';

const ActivityTab = () => {
	return (
		<>
			<h5>Current Activity</h5>
			<div className="activity-container">
				<SpotifyActivity />
				{/* <GitHubActivity /> Postponed implementation because this is more recent activity than "current activity" */}

				{/* <div className="activity-item">
					<div className="lorem"></div>
				</div>
				<div className="activity-item">
					<div className="ipsum"></div>
				</div> */}
			</div>
		</>
	);
};

export default ActivityTab;
