import './styles.css';
import SpotifyActivity from '../../components/SpotifyActivity';
// import GitHubActivity from '../../components/GitHubActivity';

const ActivityTab = () => {
	return (
		<>
			<h5 className="activity-h5">Current Activity</h5>
			<div className="activity-container">
				<SpotifyActivity />
				{/* <GitHubActivity /> Postponed implementation because this is more recent activity than "current activity" */}
			</div>
		</>
	);
};

export default ActivityTab;
