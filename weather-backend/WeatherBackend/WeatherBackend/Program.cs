using WeatherBackend;
using WeatherBackend.Services;

var builder = WebApplication.CreateBuilder(args);

var configuration = new ConfigurationBuilder()
    .SetBasePath(Environment.CurrentDirectory)
    .AddJsonFile("appsettings.json")
    .Build();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.Configure<Config>(configuration.GetSection("Config"));

builder.Services.AddScoped<IWeatherService, WeatherService>();

builder.Services.AddCors(options =>
    options.AddPolicy("default",
        policy => policy
            .AllowAnyMethod()
            .AllowAnyOrigin()
            .AllowAnyHeader()
    )
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseCors("default");

app.MapControllers();

app.Run();