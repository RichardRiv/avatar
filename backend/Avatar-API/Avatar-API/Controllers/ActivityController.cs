using System.Text.Json;
using Avatar_API.Models;
using Avatar_API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Avatar_API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ActivityController : ControllerBase
{
    private readonly ActivityService _activityService;
    private readonly IConfiguration _config;
    
    public ActivityController(ActivityService activityService, IConfiguration config)
    {
        _activityService = activityService;
        _config = config;
    }

    [HttpPost("now-playing")]
    public async Task<IActionResult> UpdateNowPlaying([FromBody] JsonElement body)
    {
        var apiKey = Request.Headers["X-Api-Key"].FirstOrDefault();
        if (apiKey != _config["ActivityApi:ApiKey"]) return Unauthorized();

        MediaActivity? activity = null;

        if (!body.TryGetProperty("idle", out _))
        {
            activity = new MediaActivity
            {
                Title = body.GetProperty("title").GetString() ?? "",
                Artist = body.GetProperty("artist").GetString() ?? "",
                AlbumTitle = body.GetProperty("albumTitle").GetString() ?? "",
                AlbumArt = body.TryGetProperty("albumArt", out var art) ? art.GetString() : null,
                Position = body.GetProperty("position").GetInt64(),
                Duration = body.GetProperty("duration").GetInt64(),
                CapturedAt = body.GetProperty("capturedAt").GetInt64(),
                Idle = false
            };
        }

        await _activityService.UpdateAsync(activity);
        return Ok();
    }

    // [HttpGet("now-playing")]
    // public IActionResult GetNowPlaying()
    // {
    //     var current = _activityService.GetCurrent();
    //     if (current == null) return Ok(new { idle = true });
    //     return Ok(current);
    // }

    [HttpGet("stream")]
    public async Task Stream(CancellationToken ct)
    {
        Response.Headers["Content-Type"] = "text/event-stream";
        Response.Headers["Cache-Control"] = "no-cache";
        Response.Headers["X-Accel-Buffering"] = "no";

        async Task Send(MediaActivity? activity)
        {
            var json = activity == null 
                ? "{\"idle\":true}" 
                : JsonSerializer.Serialize(activity, new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase});

            await Response.WriteAsync($"data: {json}\n\n", ct);
            await Response.Body.FlushAsync(ct);
        }
        
        await Send(_activityService.GetCurrent());
        _activityService.Subscribe(Send);

        try
        {
            await Task.Delay(Timeout.Infinite, ct);
        }
        finally
        {
            _activityService.Unsubscribe(Send);
        }
    }
}