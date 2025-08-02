using Microsoft.AspNetCore.Mvc;
using WeatherBackend.Models;
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
    [ProducesResponseType(typeof(CurrentWeatherData), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetCurrentWeather()
    {
        var data = await weatherService.GetCurrentWeather();
        
        return Ok(data);
    }
    
    [HttpGet]
    [Route("Forecast")]
    [ProducesResponseType(typeof(WeatherForecastData), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetHourlyForecast()
    {
        var data = await weatherService.GetForecast();
        
        return Ok(data);
    }
    
    [HttpGet]
    [Route("AirPollution")]
    [ProducesResponseType(typeof(AirPollutionData), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAirPollution()
    {
        var data = await weatherService.GetAirPollution();
        
        return Ok(data);
    }
}