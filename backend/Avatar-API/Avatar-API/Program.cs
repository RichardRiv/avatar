using Avatar_API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Registers Spotify Service as a singleton
builder.Services.AddSingleton<SpotifyService>();

// Add CORS for React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy => policy.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().AllowCredentials());
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
}

// HTTP Requests to HTTPS
app.UseHttpsRedirection();

// Enables CORS, Auth's & Controllers/Routes
app.UseCors("AllowReact");
app.UseAuthorization();
app.MapControllers();
app.Run();