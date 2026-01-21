import { ReactComponent as SpotifyLogo } from '../../assets/logos/spotify-color-svgrepo-com.svg';
import './styles.css';

const ActivityTab = () => {
	return (
		<>
			<h5>Current Activity</h5>
			<div className="activity-container">
				<div className="activity-item">
					<div className="span-container">
						<div className="span-group">
							<span style={{ fontSize: '12px' }}>Listening to Spotify</span>
							<SpotifyLogo className="spotify-logo" />
						</div>
						<span className="three-dots">. . .</span>
					</div>

					<div className="spotify-container">
						<img
							className="spotify-art"
							alt="Album Art"
							src="https://i.scdn.co/image/ab67616d0000b27392c81988695e83c2dd87a6b3"
						/>
						<div className="spotify-info">
							<div>SONG NAME</div>
							<div>SONG AUTHOR</div>
							<div>0:00 ------------ 00:00</div>
						</div>
					</div>
				</div>
				<div className="activity-item">
					{/* <div className="lorem"></div> */}
				</div>
				<div className="activity-item">
					{/* <div className="ipsum"></div> */}
				</div>
			</div>
		</>
	);
};

export default ActivityTab;
