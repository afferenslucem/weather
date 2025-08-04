using System.Text.Json.Serialization;

namespace WeatherBackend.Models.OpenWeather;

public class WeatherForecastData
{
    [JsonPropertyName("cod")]
    public string StatusCode { get; set; }

    public int Message { get; set; } 
    
    [JsonPropertyName("cnt")]
    public int ItemsCount { get; set; }

    [JsonPropertyName("list")]
    public List<ForecastItem> ForecastItems { get; set; }

    public City City { get; set; }
}

public class ForecastItem
{
    [JsonPropertyName("dt")]
    public long DateTimeUnix { get; set; }

    public MainWeatherParameters Main { get; set; }
    public List<WeatherCondition> Weather { get; set; }
    public Clouds Clouds { get; set; }
    public Wind Wind { get; set; }
    public int Visibility { get; set; }

    [JsonPropertyName("pop")]
    public double ProbabilityOfPrecipitation { get; set; }

    public Rain Rain { get; set; }
    public Snow Snow { get; set; }

    [JsonPropertyName("sys")]
    public ForecastSystem System { get; set; }

    [JsonPropertyName("dt_txt")]
    public string DateTimeText { get; set; } // "2022-08-30 15:00:00"
}

public class ForecastSystem
{
    [JsonPropertyName("pod")]
    public string PartOfDay { get; set; } // "d" или "n"
}

public class City
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Coordinate Coord { get; set; }
    public string Country { get; set; }
    public int Population { get; set; }
    public int Timezone { get; set; }

    [JsonPropertyName("sunrise")]
    public long SunriseUnix { get; set; }

    [JsonPropertyName("sunset")]
    public long SunsetUnix { get; set; }
}