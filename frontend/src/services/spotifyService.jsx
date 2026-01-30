const BASE_URL = 'http://127.0.0.1:7044/api/spotify';

export const spotifyService = {
	async getCurrentlyPlaying() {
		try {
			const response = await fetch(`${BASE_URL}/currently-playing`);

			if (!response.ok) {
				throw new Error('Failed to fetch currently playing');
			}

			const data = await response.json();
			return data;
		} catch (err) {
			console.error('Error fetching spotify data: ', err);
			return { isPlaying: false };
		}
	},
};
