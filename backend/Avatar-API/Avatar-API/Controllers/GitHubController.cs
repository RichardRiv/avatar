using Avatar_API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Avatar_API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GitHubController : ControllerBase
{
    private readonly GitHubService _gitHubService;

    public GitHubController(GitHubService gitHubService)
    {
        _gitHubService = gitHubService;
    }

    [HttpGet("activity")]
    public async Task<IActionResult> GetActivity()
    {
        var activity = await _gitHubService.GetRecentActivityAsync();
        if(activity == null) return NotFound(new {message = "No Recent GitHub Activity found."});
        
        return Ok(activity);
    }
}