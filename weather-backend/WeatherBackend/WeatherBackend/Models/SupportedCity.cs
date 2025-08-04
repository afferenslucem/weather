using System.Text;

namespace WeatherBackend.Models;

public class SupportedCity
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string CountryCode { get; set; }
    public double Longitude { get; set; }
    public double Latitude { get; set; }

    public override string ToString()
    {
        var builder = new StringBuilder(Name);

        builder.Append(",");
        
        builder.Append(this.CountryCode);
        
        return builder.ToString();
    }
}