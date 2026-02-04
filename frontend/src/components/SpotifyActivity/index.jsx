import './styles.css';
import { useEffect, useState } from 'react';
import { ReactComponent as SpotifyLogo } from '../../assets/logos/spotify-color-svgrepo-com.svg';
import { spotifyService } from '../../services/spotifyService';

const SpotifyActivity = () => {
	const [spotifyData, setSpotifyData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [currentProgress, setCurrentProgress] = useState(0);

	useEffect(() => {
		fetchSpotifyData();

		const interval = setInterval(fetchSpotifyData, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!spotifyData?.isPlaying) return;

		setCurrentProgress(spotifyData.progressMs);

		const progressInterval = setInterval(() => {
			setCurrentProgress((prev) => {
				const newProgress = prev + 1000; // Add 1 second

				// Don't go beyond the song duration
				if (newProgress <= spotifyData.durationMs) {
					return newProgress; // Song still playing, update progress
				} else {
					return prev; // Song ended, keep previous value (don't go over)
				}
			});
		}, 1000);

		return () => clearInterval(progressInterval);
	}, [spotifyData]);

	const fetchSpotifyData = async () => {
		const data = await spotifyService.getCurrentlyPlaying();
		setSpotifyData(data);
		setIsLoading(false);
	};

	const formatTime = (ms) => {
		const totalSeconds = Math.floor(ms / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	};

	const getProgressPercentage = () => {
		if (!spotifyData?.durationMs) return 0;
		return (currentProgress / spotifyData.durationMs) * 100;
	};

	return (
		<>
			{spotifyData?.isPlaying === false ? (
				<></>
			) : (
				<div className="spotify-item">
					<div className="span-container">
						<div className="span-group">
							{isLoading
								? 'Loading...'
								: spotifyData?.isPlaying
									? 'Listening to Spotify'
									: 'Not Playing'}
							<SpotifyLogo className="spotify-logo" />
						</div>
						<span className="three-dots">. . .</span>
					</div>

					{spotifyData?.isPlaying && spotifyData.track ? (
						<div className="spotify-container">
							<img
								className="spotify-art"
								alt="Album Art"
								src={spotifyData.track.albumArtUrl}
							/>
							<div className="spotify-info">
								<div>{spotifyData.track.name}</div>
								<div className="spotify-artist">{spotifyData.track.artist}</div>
								<div className="progress-bar-container">
									<span className="progress-time">
										{formatTime(currentProgress)}
									</span>
									<div className="progress-bar-wrapper">
										<div className="progress-bar-bg">
											<div
												className="progress-bar-fill"
												style={{ width: `${getProgressPercentage()}%` }}
											/>
										</div>
									</div>
									<span className="progress-time">
										{formatTime(spotifyData.durationMs)}
									</span>
								</div>
							</div>
						</div>
					) : (
						!isLoading && (
							<div className="spotify-container">
								<div className="spotify-info">
									<div>Nothing Playing Right Now</div>
								</div>
							</div>
						)
					)}
				</div>
			)}
		</>
	);
};

export default SpotifyActivity;
