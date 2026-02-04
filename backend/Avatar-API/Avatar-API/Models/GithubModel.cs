namespace Avatar_API.Models;

public class GithubModel
{
    public class GitHubEvent
    {
        public string? Type { get; set; }
        public GitHubRepo? Repo { get; set; }
        public GitHubPayload? Payload { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class GitHubRepo
    {
        public string? Name { get; set; }
    }

    public class GitHubPayload
    {
        public List<GitHubCommit?> Commits { get; set; }
    }
    
    public class GitHubCommit{
        public string? Message { get; set; }
    }

    public class GitHubActivity
    {
        public string RepoName  { get; set; }
        public string CommitMessage { get; set; }
        public DateTime Timestamp { get; set; }
        public bool IsActive { get; set; }
    }
}