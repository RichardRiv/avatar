namespace Avatar_API.Models

{
    public class MediaActivity
    {
        public string Title { get; set; } = string.Empty;
        public string Artist { get; set; } = string.Empty;
        public string AlbumTitle { get; set; } = string.Empty;
        public string? AlbumArt { get; set; }
        public long Position { get; set; }
        public long Duration { get; set; }
        public long CapturedAt { get; set; }
        public bool Idle { get; set; }
    }
}