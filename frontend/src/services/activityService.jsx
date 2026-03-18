// const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:7044/api/spotify';
const BASE_URL = process.env.REACT_APP_API_URL;

export const activityService = {
	subscribe(handleActivity) {
		const eventSource = new EventSource(`${BASE_URL}/api/activity/stream`);

		eventSource.onmessage = (e) => {
			const data = JSON.parse(e.data);

			if (data.idle) {
				handleActivity(null, 0);
				return;
			}

			// Calculate current position accounting for time elapsed since server captured it
			const elapsed = Math.floor(Date.now() / 1000) - data.capturedAt;
			const adjustedPosition = Math.min(data.position + elapsed, data.duration);
			handleActivity(data, adjustedPosition);
		};

		eventSource.onerror = () => {
			// SSE will auto-reconnect, nothing to do
		};

		return () => eventSource.close();
	},
};

// async getCurrentlyPlaying() {
// 		try {
// 			const response = await fetch(`${BASE_URL}/currently-playing`);

// 			if (!response.ok) {
// 				throw new Error('Failed to fetch currently playing');
// 			}

// 			const data = await response.json();
// 			return data;
// 		} catch (err) {
// 			console.error('Error fetching spotify data: ', err);
// 			return { isPlaying: false };
// 		}
// 	},
