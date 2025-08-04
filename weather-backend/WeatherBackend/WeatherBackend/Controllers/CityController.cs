using Microsoft.AspNetCore.Mvc;
using WeatherBackend.Models;
using WeatherBackend.Models.OpenWeather;
using WeatherBackend.Services;

namespace WeatherBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class CityController : Controller
{
    private ICityService _cityService;

    public CityController(ICityService cityService)
    {
        this._cityService = cityService;
    }

    [HttpGet]
    [Route("All")]
    [ProducesResponseType(typeof(IEnumerable<SupportedCity>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAll()
    {
        var data = await _cityService.GetCities();
        
        return Ok(data);
    }
}