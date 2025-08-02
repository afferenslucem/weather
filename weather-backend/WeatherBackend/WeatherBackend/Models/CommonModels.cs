namespace WeatherBackend.Models;

using System.Text.Json.Serialization;

public class Coordinate
{
    [JsonPropertyName("lon")]
    public double Longitude { get; set; }

    [JsonPropertyName("lat")]
    public double Latitude { get; set; }
}

public class WeatherCondition
{
    [JsonPropertyName("id")]
    public int ConditionId { get; set; }

    public string Main { get; set; }       
    public string Description { get; set; } 
    public string Icon { get; set; }  
}

public class MainWeatherParameters
{
    [JsonPropertyName("temp")]
    public double Temperature { get; set; }

    [JsonPropertyName("feels_like")]
    public double TemperatureFeelsLike { get; set; }

    [JsonPropertyName("temp_min")]
    public double TemperatureMinimal { get; set; }

    [JsonPropertyName("temp_max")]
    public double TemperatureMaximal { get; set; }

    public int Pressure { get; set; }
    public int Humidity { get; set; }

    [JsonPropertyName("sea_level")]
    public int SeaLevelPressure { get; set; }

    [JsonPropertyName("grnd_level")]
    public int GroundLevelPressure { get; set; }

    [JsonPropertyName("temp_kf")] 
    public double? TemperatureCoefficient { get; set; }
}

public class Wind
{
    public double Speed { get; set; }

    [JsonPropertyName("deg")]
    public int DirectionDegrees { get; set; }

    [JsonPropertyName("gust")]
    public double? GustSpeed { get; set; } 
}

public class Clouds
{
    [JsonPropertyName("all")]
    public int CloudinessPercentage { get; set; }
}

public class Rain
{
    [JsonPropertyName("1h")] 
    public double? VolumeLast1Hour { get; set; }

    [JsonPropertyName("3h")] 
    public double? VolumeLast3Hours { get; set; }
}

public class Snow
{
    [JsonPropertyName("1h")] 
    public double? VolumeLast1Hour { get; set; }

    [JsonPropertyName("3h")] 
    public double? VolumeLast3Hours { get; set; }
}