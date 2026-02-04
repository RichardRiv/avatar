namespace Avatar_API.Models
//public class SpotifyTrack
{
    public class CurrentlyPlayingResponse
    {
        public bool IsPlaying { get; set; }
        public TrackInfo? Track { get; set; }
        public int? ProgressMs { get; set; }
        public int DurationMs { get; set; }
    }

    public class TrackInfo
    {
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Album { get; set; }
        public string AlbumArtUrl { get; set; }
        public string SpotifyUrl { get; set; }
    }
}