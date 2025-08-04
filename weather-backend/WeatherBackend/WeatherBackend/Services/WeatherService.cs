using System.Collections.Specialized;
using System.Web;
using Microsoft.Extensions.Options;
using WeatherBackend.Models;
using WeatherBackend.Models.OpenWeather;

namespace WeatherBackend.Services;

public interface IWeatherService
{
    Task<CurrentWeatherData> GetCurrentWeather(SupportedCity city);
    Task<WeatherForecastData> GetForecast(SupportedCity city);
    Task<AirPollutionData> GetAirPollution(SupportedCity city);
}

public class WeatherService: IWeatherService
{
    private IOptions<Config> config;

    public WeatherService(IOptions<Config> config)
    {
        this.config = config;
    }
    
    public async Task<CurrentWeatherData> GetCurrentWeather(SupportedCity city)
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/weather");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("q", city.ToString());
        
        query.Add("units", "metric");
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<CurrentWeatherData>();

        return data;
    }
    
    public async Task<WeatherForecastData> GetForecast(SupportedCity city)
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/forecast");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("q", city.ToString());
        
        query.Add("units", "metric");
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<WeatherForecastData>();

        return data;
    }
    
    public async Task<AirPollutionData> GetAirPollution(SupportedCity city)
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/air_pollution");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("lat", city.Latitude.ToString());
        query.Add("lon", city.Longitude.ToString());
        
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<AirPollutionData>();

        return data;
    }
}