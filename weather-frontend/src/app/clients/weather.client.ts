import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { map, Observable, tap } from 'rxjs';
import { CurrentWeatherData } from '../models/weather-models';

@Injectable({
    providedIn: 'root',
})
export class WeatherClient {
    private httpClient = inject(HttpClient);

    public getCurrentWeather(): Observable<CurrentWeatherData> {
        return this.httpClient.get('/weather/currentWeather').pipe(
            map(data => plainToInstance(CurrentWeatherData, data)),
        )
    }
}
