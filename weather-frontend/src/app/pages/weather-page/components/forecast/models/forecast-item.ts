import { ForecastItem as ForecastWeatherData } from '../../../../../models/weather-models';

export interface ForecastItem {
    night: ForecastWeatherData;
    day: ForecastWeatherData;
}