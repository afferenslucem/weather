using System.Collections.Specialized;
using System.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WeatherBackend.Models;
using WeatherBackend.Models.OpenWeather;

namespace WeatherBackend.Services;

public interface ICityService
{
    Task<IEnumerable<SupportedCity>> GetCities();
    Task<SupportedCity> GetCity(int id);
}

public class CityService : ICityService
{
    private WeatherContext _context;

    public CityService(WeatherContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<SupportedCity>> GetCities()
    {
        return await _context.Cities.ToArrayAsync();
    }

    public async Task<SupportedCity> GetCity(int id)
    {
        return await _context.Cities.FirstAsync(item => id == item.Id);
    }
}