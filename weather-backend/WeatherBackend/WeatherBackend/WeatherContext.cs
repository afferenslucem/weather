using Microsoft.EntityFrameworkCore;
using WeatherBackend.Models;

namespace WeatherBackend;

public class WeatherContext : DbContext
{
    public DbSet<SupportedCity> Cities { get; set; }

    public WeatherContext(DbContextOptions<WeatherContext> options)
        : base(options)
    {}
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<SupportedCity>()
            .HasIndex(p => new {p.Name , p.CountryCode}).IsUnique();
    }
}