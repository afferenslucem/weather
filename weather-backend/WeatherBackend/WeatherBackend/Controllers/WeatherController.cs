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
    [Route("CurrentWeather")]
    public async Task<IActionResult> GetCurrentWeather()
    {
        var data = await weatherService.GetCurrentWeather();
        
        return Ok(data);
    }
    
    [HttpGet]
    [Route("Forecast")]
    public async Task<IActionResult> GetHourlyForecast()
    {
        var data = await weatherService.GetForecast();
        
        return Ok(data);
    }
    
    [HttpGet]
    [Route("AirPollution")]
    public async Task<IActionResult> GetAirPollution()
    {
        var data = await weatherService.GetAirPollution();
        
        return Ok(data);
    }
}

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}