import './styles.css';
import Activity from '../../components/Activity';
// import GitHubActivity from '../../components/GitHubActivity';

const ActivityTab = () => {
	return (
		<>
			<h5 className="activity-h5">Current Activity</h5>
			<div className="activity-container">
				<Activity />
				{/* <GitHubActivity /> Postponed implementation because this is more recent activity than "current activity" */}
			</div>
		</>
	);
};

export default ActivityTab;
