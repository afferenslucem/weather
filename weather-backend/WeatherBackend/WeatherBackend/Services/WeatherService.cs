using System.Collections.Specialized;
using System.Web;
using Microsoft.Extensions.Options;

namespace WeatherBackend.Services;

public interface IWeatherService
{
    Task<object> GetCurrentWeather();
}

public class WeatherService: IWeatherService
{
    private IOptions<Config> config;

    public WeatherService(IOptions<Config> config)
    {
        this.config = config;
    }
    
    public async Task<object> GetCurrentWeather()
    {
        var uriBuilder = new UriBuilder("http://api.openweathermap.org/data/2.5/weather");
        var query = HttpUtility.ParseQueryString(string.Empty);
        
        query.Add("lat", "55.163516");
        query.Add("lon", "61.492397");
        
        query.Add("units", "metric");
        query.Add("appid", config.Value.APIKey);
        
        uriBuilder.Query = query.ToString();
        
        using var client = new HttpClient();

        var uri = uriBuilder.ToString();
        
        using var response = await client.GetAsync(uri);

        var data = await response.Content.ReadFromJsonAsync<Object>();

        return data;
    }
}