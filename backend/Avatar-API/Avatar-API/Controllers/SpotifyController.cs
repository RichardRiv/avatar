using Microsoft.AspNetCore.Mvc;
using SpotifyAPI.Web;
using Avatar_API.Services;

namespace Avatar_API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SpotifyController: ControllerBase
{
    private readonly SpotifyService _spotifyService;
    private readonly IConfiguration _configuration;

    public SpotifyController(SpotifyService spotifyService, IConfiguration configuration)
    {
        _spotifyService = spotifyService;
        _configuration = configuration;
    }

    [HttpGet("currently-playing")]
    public async Task<IActionResult> GetCurrentlyPlaying()
    {
        var refreshToken = _configuration["Spotify:RefreshToken"];

        if (string.IsNullOrEmpty(refreshToken))
        {
            return BadRequest(new {error = "Refresh token is empty"});
        }
        
        var result = await _spotifyService.GetCurrentlyPlayingAsync(refreshToken);

        if (result == null)
        {
            return Ok(new {isPlaying = false});
        }
        
        return Ok(result);
    }

    [HttpGet("health")]
    public IActionResult Health()
    {
        return Ok(new {status = "Healthy", timestamp = DateTime.UtcNow});
    }

    [HttpGet("login")]
    public IActionResult Login()
    {
        var clientId = _configuration["Spotify:ClientId"];
        var redirectUri = _configuration["Spotify:RedirectUri"];
        
        // DEBUG: Print these values
        Console.WriteLine($"ClientId: {clientId}");
        Console.WriteLine($"RedirectUri: {redirectUri}");

        var scopes = new[]
        {
            "user-read-currently-playing",
            "user-read-playback-state"
        };
        
        var scopeString = string.Join(" ", scopes);

        var authUrl = $"https://accounts.spotify.com/authorize?" + $"client_id={clientId}" + $"&response_type=code" +
                      $"&redirect_uri={Uri.EscapeDataString(redirectUri)}" +
                      $"&scope={Uri.EscapeDataString(scopeString)}";
        
        // DEBUG: Print the full URL
        Console.WriteLine($"Auth URL: {authUrl}");

        return Redirect(authUrl);
    }

    [HttpGet("callback")]
    public async Task<IActionResult> Callback([FromQuery] string code)
    {
        if(string.IsNullOrEmpty(code)) return BadRequest("No authorization code received");
        
        var clientId = _configuration["Spotify:ClientId"] ?? throw new Exception("No client id provided");
        var clientSecret = _configuration["Spotify:ClientSecret"] ?? throw new Exception("No client secret provided");
        var redirectUri = _configuration["Spotify:RedirectUri"] ?? throw new InvalidOperationException("No redirect uri set");

        try
        {
            var config = SpotifyClientConfig.CreateDefault();
            var tokenRequest = new AuthorizationCodeTokenRequest(clientId, clientSecret, code, new Uri(redirectUri));
            var oauthClient = new OAuthClient(config);
            var tokenResponse = await oauthClient.RequestToken(tokenRequest);

            return Ok(new
            {
                message = "Success!",
                refreshtoken = tokenResponse.RefreshToken,
                accessToken = tokenResponse.AccessToken,
                expiresIn = tokenResponse.ExpiresIn
            });
        }
        catch (Exception ex)
        {
            return BadRequest(new {error = ex.Message});
        }
    }
}