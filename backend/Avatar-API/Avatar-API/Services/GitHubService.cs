using System.Text.Json;
using Avatar_API.Models;

namespace Avatar_API.Services;

public class GitHubService
{
    private readonly HttpClient _httpClient;
    private readonly string _gitHubUsername = "RichardRiv";

    public GitHubService(HttpClient httpClient)
    {
        _httpClient= httpClient;
        _httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("Avatar-API");
    }

    public async Task<GithubModel.GitHubActivity?> GetRecentActivityAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync($"https://api.github.com/users/{_gitHubUsername}/events");

            if (!response.IsSuccessStatusCode) return null;

            var json = await response.Content.ReadAsStringAsync();
            var events = JsonSerializer.Deserialize<List<GithubModel.GitHubEvent>>(json);

            var recentPush = events?.FirstOrDefault(e => e.Type == "PushEvent");

            if (recentPush == null) return null;

            return new GithubModel.GitHubActivity()
            {
                RepoName = recentPush.Repo?.Name?.Split('/').Last() ?? "Unknown",
                CommitMessage = recentPush.Payload?.Commits?.FirstOrDefault()?.Message ?? "Recent Activity",
                Timestamp = recentPush.CreatedAt,
                IsActive = (DateTime.UtcNow - recentPush.CreatedAt).TotalMinutes < 30,
            };
        }
        catch
        {
            return null;
        }
    }
}