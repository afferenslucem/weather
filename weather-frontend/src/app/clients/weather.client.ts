import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { CurrentWeatherData, WeatherForecastData } from '../models/weather-models';

@Injectable({
    providedIn: 'root',
})
export class WeatherClient {
    private httpClient = inject(HttpClient);

    public getCurrentWeather(cityId: number): Observable<CurrentWeatherData> {
        return this.httpClient.get(`/weather/currentWeather/${cityId}`).pipe(
            map(data => plainToInstance(CurrentWeatherData, data)),
        )
    }

    public getForecast(cityId: number): Observable<WeatherForecastData> {
        return this.httpClient.get(`/weather/forecast/${cityId}`).pipe(
            map(data => plainToInstance(WeatherForecastData, data)),
        );
    }
}

