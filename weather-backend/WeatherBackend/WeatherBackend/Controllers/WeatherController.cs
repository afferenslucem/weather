using Microsoft.AspNetCore.Mvc;
using WeatherBackend.Models;
using WeatherBackend.Models.OpenWeather;
using WeatherBackend.Services;

namespace WeatherBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherController : Controller
{
    private IWeatherService _weatherService;
    private ICityService _cityService;

    public WeatherController(IWeatherService weatherService, ICityService cityService)
    {
        this._weatherService = weatherService;
        this._cityService = cityService;
    }

    [HttpGet]
    [Route("CurrentWeather/{id}")]
    [ProducesResponseType(typeof(CurrentWeatherData), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetCurrentWeather(int id)
    {
        var city = await _cityService.GetCity(id);
        
        var data = await _weatherService.GetCurrentWeather(city);

        return Ok(data);
    }

    [HttpGet]
    [Route("Forecast/{id}")]
    [ProducesResponseType(typeof(WeatherForecastData), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetHourlyForecast(int id)
    {
        var city = await _cityService.GetCity(id);
        
        var data = await _weatherService.GetForecast(city);

        return Ok(data);
    }

    [HttpGet]
    [Route("AirPollution/{id}")]
    [ProducesResponseType(typeof(AirPollutionData), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAirPollution(int id)
    {
        var city = await _cityService.GetCity(id);
        
        var data = await _weatherService.GetAirPollution(city);

        return Ok(data);
    }
}