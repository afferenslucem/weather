using System.Collections.Specialized;
using System.Web;
using Microsoft.Extensions.Options;
using WeatherBackend.Models;

namespace WeatherBackend.Services;

public interface IWeatherService
{
    Task<CurrentWeatherData> GetCurrentWeather();
    Task<WeatherForecastData> GetForecast();
    Task<AirPollutionData> GetAirPollution();
}

public class WeatherService: IWeatherService
{
    private IOptions<Config> config;

    public WeatherService(IOptions<Config> config)
    {
        this.config = config;
    }
    
    public async Task<CurrentWeatherData> GetCurrentWeather()
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/weather");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("q", "Chelyabinsk,RU");
        
        query.Add("units", "metric");
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<CurrentWeatherData>();

        return data;
    }
    
    public async Task<WeatherForecastData> GetForecast()
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/forecast");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("q", "Chelyabinsk,RU");
        
        query.Add("units", "metric");
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<WeatherForecastData>();

        return data;
    }
    
    public async Task<AirPollutionData> GetAirPollution()
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/air_pollution");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("lat", "55.163516");
        query.Add("lon", "61.492397");
        
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<AirPollutionData>();

        return data;
    }
}