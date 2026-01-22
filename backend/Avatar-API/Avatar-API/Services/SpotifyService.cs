using SpotifyAPI.Web;
using Avatar_API.Models;

namespace Avatar_API.Services;

public class SpotifyService
{
    private readonly IConfiguration _configuration;
    private SpotifyClient? _spotifyClient;
    private string? _accessToken;
    private DateTime _tokenExpiry;

    public SpotifyService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task InitializeAsync(string refreshToken)
    {
        await RefreshAccessTokenAsync(refreshToken);
    }

    private async Task RefreshAccessTokenAsync(string refreshToken)
    {
        var clientId = _configuration["Spotify:ClientId"] ?? throw new InvalidOperationException("Spotify client id not set");
        var clientSecret = _configuration["Spotify:ClientSecret"] ?? throw new InvalidOperationException("Spotify client secret not set");

        var config = SpotifyClientConfig.CreateDefault();
        var request = new AuthorizationCodeRefreshRequest(clientId, clientSecret, refreshToken);
        var response = await new OAuthClient(config).RequestToken(request);

        _accessToken = response.AccessToken;
        _tokenExpiry = DateTime.UtcNow.AddSeconds(response.ExpiresIn);
        
        _spotifyClient = new SpotifyClient(config.WithToken(response.AccessToken));
    }
    
    private async Task EnsureValidTokenAsync(string refreshToken)
    {
        if (DateTime.UtcNow.AddMinutes(5) >= _tokenExpiry)
        {
            await RefreshAccessTokenAsync(refreshToken);
        }
    }

    public async Task<CurrentlyPlayingResponse?> GetCurrentlyPlayingAsync(string refreshToken)
    {
        await EnsureValidTokenAsync(refreshToken);

        if (_spotifyClient == null) return null;

        try
        {
            var currentlyPlaying = await _spotifyClient.Player.GetCurrentlyPlaying(new PlayerCurrentlyPlayingRequest());

            if (currentlyPlaying?.Item is FullTrack track)
            {
                return new CurrentlyPlayingResponse
                {
                    IsPlaying = currentlyPlaying.IsPlaying,
                    ProgressMs = currentlyPlaying.ProgressMs,
                    DurationMs = track.DurationMs,
                    Track = new TrackInfo
                    {
                        Name = track.Name,
                        Artist = string.Join(", ", track.Artists.Select(a => a.Name)),
                        Album = track.Album.Name,
                        AlbumArtUrl = track.Album.Images.FirstOrDefault()?.Url ?? "",
                        SpotifyUrl = track.ExternalUrls["spotify"]
                    }
                };
            }

            return new CurrentlyPlayingResponse()
            {
                IsPlaying = false,
                Track = null,
                ProgressMs = 0,
                DurationMs = 0
            };
        }
        catch (APIException ex)
        {
            Console.WriteLine($"Spotify API Error: {ex.Message}");
            return null;
        }
    }
}