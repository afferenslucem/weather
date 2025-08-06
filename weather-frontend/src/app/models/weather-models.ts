import { Expose, Transform, Type } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';

// Common models
export class Coordinates {
    @Expose({ name: 'lon' })
    public longitude: number = null!;

    @Expose({ name: 'lat' })
    public latitude: number = null!;
}

export class WeatherCondition {
    @Expose({ name: 'id' })
    public id: number = null!;

    @Expose({ name: 'main' })
    public main: string = null!;

    @Expose({ name: 'description' })
    public description: string = null!;

    @Expose({ name: 'icon' })
    public iconCode: string = null!;
}

export class MainWeatherParameters {
    @Expose({ name: 'temp' })
    public temperature: number = null!;

    @Expose({ name: 'feels_like' })
    public feelsLike: number = null!;

    @Expose({ name: 'temp_min' })
    public temperatureMin: number = null!;

    @Expose({ name: 'temp_max' })
    public temperatureMax: number = null!;

    @Expose({ name: 'pressure' })
    public pressure: number = null!;

    @Expose({ name: 'humidity' })
    public humidity: number = null!;

    @Expose({ name: 'sea_level' })
    public seaLevelPressure?: number;

    @Expose({ name: 'grnd_level' })
    public groundLevelPressure?: number;
}

export class Wind {
    @Expose({ name: 'speed' })
    public speed: number = null!;

    @Expose({ name: 'deg' })
    public degrees: number = null!;

    @Expose({ name: 'gust' })
    public gustSpeed?: number;
}

export class Precipitation {
    @Expose({ name: '1h' })
    public lastOneHour?: number;

    @Expose({ name: '3h' })
    public lastThreeHours?: number;
}

export class Clouds {
    @Expose({ name: 'all' })
    public percentage: number = null!;
}

// Current Weather models
export class SystemData {
    @Expose({ name: 'type' })
    public type: number = null!;

    @Expose({ name: 'id' })
    public id: number = null!;

    @Expose({ name: 'country' })
    public countryCode: string = null!;

    @Expose({ name: 'sunrise' })
    @Transform(unixToDate)
    public sunriseTime: Date = null!;

    @Expose({ name: 'sunset' })
    @Transform(unixToDate)
    public sunsetTime: Date = null!;

    @Expose({ name: 'pod' })
    public partOfDay?: string;
}

export class CurrentWeatherData {
    @Type(() => Coordinates)
    @Expose({ name: 'coord' })
    public coordinates: Coordinates = null!;

    @Type(() => WeatherCondition)
    @Expose({ name: 'weather' })
    public weatherConditions?: WeatherCondition[];

    @Expose({ name: 'base' })
    public base?: string;

    @Type(() => MainWeatherParameters)
    @Expose({ name: 'main' })
    public main: MainWeatherParameters = null!;

    @Expose({ name: 'visibility' })
    public visibilityMeters: number = null!;

    @Type(() => Wind)
    public wind: Wind = null!;

    @Type(() => Precipitation)
    public rain?: Precipitation;

    @Type(() => Precipitation)
    public snow?: Precipitation;

    @Type(() => Clouds)
    public clouds: Clouds = null!;

    @Expose({ name: 'dt' })
    @Transform(unixToDate)
    public measurementTime: number = null!;

    @Type(() => SystemData)
    @Expose({ name: 'sys' })
    public system: SystemData = null!;

    @Expose({ name: 'timezone' })
    public timezoneShiftSeconds: number = null!;

    @Expose({ name: 'id' })
    public cityId: number = null!;

    @Expose({ name: 'name' })
    public cityName: string = null!;
}

// Forecast models
export class ForecastSystem {
    @Expose({ name: 'pod' })
    public partOfDay?: string;
}

export class ForecastItem {
    @Expose({ name: 'dt' })
    @Transform(unixToDate)
    public forecastTime: Date = null!;

    @Type(() => MainWeatherParameters)
    @Expose({ name: 'main' })
    public mainParameters: MainWeatherParameters = null!;

    @Type(() => WeatherCondition)
    @Expose({ name: 'weather' })
    public weatherConditions?: WeatherCondition[];

    @Type(() => Clouds)
    public clouds: Clouds = null!;

    @Type(() => Wind)
    public wind: Wind = null!;

    @Expose({ name: 'visibility' })
    public visibilityMeters: number = null!;

    @Expose({ name: 'pop' })
    public precipitationProbability: number = null!;

    @Type(() => Precipitation)
    public rain?: Precipitation;

    @Type(() => Precipitation)
    public snow?: Precipitation;

    @Type(() => ForecastSystem)
    @Expose({ name: 'sys' })
    public system: ForecastSystem = null!;

    @Expose({ name: 'dt_txt' })
    public forecastTimeISO?: string;
}

export class City {
    public id: number = null!;

    public name: string = null!;

    @Type(() => Coordinates)
    @Expose({ name: 'coord' })
    public coordinates: Coordinates = null!;

    @Expose({ name: 'country' })
    public countryCode: string = null!;

    @Expose({ name: 'population' })
    public population: number = null!;

    @Expose({ name: 'timezone' })
    public timezoneShiftSeconds: number = null!;

    @Expose({ name: 'sunrise' })
    public sunriseTime: number = null!;

    @Expose({ name: 'sunset' })
    public sunsetTime: number = null!;
}

export class WeatherForecastData {
    @Expose({ name: 'cnt' })
    public itemsCount: number = null!;

    @Type(() => ForecastItem)
    @Expose({ name: 'list' })
    public forecastItems?: ForecastItem[];

    @Type(() => City)
    public city: City = null!;
}

// Air Pollution models
export class AirQualityIndex {
    @Expose({ name: 'aqi' })
    public airQualityIndex: number = null!; // 1-5 where 1=Good, 5=Very Poor
}

export class PollutionComponents {
    @Expose({ name: 'co' })
    public carbonMonoxide: number = null!; // μg/m3

    @Expose({ name: 'no' })
    public nitrogenMonoxide: number = null!; // μg/m3

    @Expose({ name: 'no2' })
    public nitrogenDioxide: number = null!; // μg/m3

    @Expose({ name: 'o3' })
    public ozone: number = null!; // μg/m3

    @Expose({ name: 'so2' })
    public sulphurDioxide: number = null!; // μg/m3

    @Expose({ name: 'pm2_5' })
    public fineParticles: number = null!; // μg/m3

    @Expose({ name: 'pm10' })
    public coarseParticles: number = null!; // μg/m3

    @Expose({ name: 'nh3' })
    public ammonia: number = null!; // μg/m3
}

export class AirPollutionMeasurement {
    @Expose({ name: 'dt' })
    public measurementTime: number = null!;

    @Type(() => AirQualityIndex)
    @Expose({ name: 'main' })
    public airQuality: AirQualityIndex = null!;

    @Type(() => PollutionComponents)
    @Expose({ name: 'components' })
    public pollutants: PollutionComponents = null!;
}

export class AirPollutionData {
    @Type(() => Coordinates)
    @Expose({ name: 'coord' })
    public coordinates: Coordinates = null!;

    @Type(() => AirPollutionMeasurement)
    @Expose({ name: 'list' })
    public measurements?: AirPollutionMeasurement[];
}

function unixToDate(params: TransformFnParams): Date | null {
    if (params.value == null) {
        return null;
    }

    return new Date(params.value * 1000);
}