namespace WeatherBackend.Models;

using System.Text.Json.Serialization;

public class AirPollutionData
{
    [JsonPropertyName("coord")]
    public CoordinatesVector CoordinatesVector { get; set; }
    
    [JsonPropertyName("list")]
    public List<AirPollutionMeasurement> Measurements { get; set; }
}

public class CoordinatesVector
{
    [JsonPropertyName("0")]
    public double Longitude { get; set; }
    
    [JsonPropertyName("1")]
    public double Latitude { get; set; }
}

public class AirPollutionMeasurement
{
    [JsonPropertyName("dt")]
    public long DateTimeUnix { get; set; }
    
    [JsonPropertyName("main")]
    public AirQualityIndex AirQuality { get; set; }
    
    [JsonPropertyName("components")]
    public PollutionComponents Components { get; set; }
}

public class AirQualityIndex
{
    [JsonPropertyName("aqi")]
    public int AirQualityIndexValue { get; set; } 
}

public class PollutionComponents
{
    [JsonPropertyName("co")]
    public double CarbonMonoxide { get; set; }
    
    [JsonPropertyName("no")]
    public double NitrogenMonoxide { get; set; } 
    
    [JsonPropertyName("no2")]
    public double NitrogenDioxide { get; set; } 
    
    [JsonPropertyName("o3")]
    public double Ozone { get; set; } 
    
    [JsonPropertyName("so2")]
    public double SulphurDioxide { get; set; } 
    
    [JsonPropertyName("pm2_5")]
    public double FineParticles { get; set; } 
    
    [JsonPropertyName("pm10")]
    public double CoarseParticles { get; set; } 
    
    [JsonPropertyName("nh3")]
    public double Ammonia { get; set; } 
}