using Avatar_API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddHttpClient<GitHubService>();

// Registers Spotify Service as a singleton
builder.Services.AddSingleton<SpotifyService>();

// Add CORS for React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy => 
        policy.WithOrigins("http://localhost:3000", "https://avatar-nine-steel.vercel.app")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
}

// Enables CORS, Auth's & Controllers/Routes
app.UseCors("AllowReact");
app.UseAuthorization();
app.MapControllers();
app.Run();