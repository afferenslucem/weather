using System.Text.Json.Serialization;

namespace WeatherBackend.Models.OpenWeather;

public class CurrentWeatherData
{
    public Coordinate Coord { get; set; }
    public List<WeatherCondition> Weather { get; set; }
    public string Base { get; set; } 
    public MainWeatherParameters Main { get; set; }
    public int Visibility { get; set; }
    public Wind Wind { get; set; }
    public Rain Rain { get; set; }
    public Snow Snow { get; set; }
    public Clouds Clouds { get; set; }

    [JsonPropertyName("dt")]
    public long DateTimeUnix { get; set; }

    [JsonPropertyName("sys")]
    public SystemData System { get; set; }

    public int Timezone { get; set; }

    [JsonPropertyName("id")]
    public int CityId { get; set; }

    [JsonPropertyName("name")]
    public string CityName { get; set; }

    [JsonPropertyName("cod")]
    public int StatusCode { get; set; }
}

public class SystemData
{
    public int Type { get; set; }
    public int Id { get; set; }
    public string Country { get; set; }

    [JsonPropertyName("sunrise")]
    public long SunriseUnix { get; set; }

    [JsonPropertyName("sunset")]
    public long SunsetUnix { get; set; }

    [JsonPropertyName("pod")] // Только для прогноза, но оставлено для совместимости
    public string PartOfDay { get; set; } // "d" (day) или "n" (night)
}