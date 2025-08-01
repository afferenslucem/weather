using Microsoft.AspNetCore.Mvc;
using WeatherBackend.Services;

namespace WeatherBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherController : Controller
{
    private IWeatherService weatherService;

    public WeatherController(IWeatherService weatherService)
    {
        this.weatherService = weatherService;
    }
    
    [HttpGet]
    [Route("Forecast")]
    public async Task<IActionResult> GetForecast()
    {
        var data = await weatherService.GetCurrentWeather();
        
        return Ok(data);
    }
}

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}