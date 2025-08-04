import { DatePipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { CityClient } from '../../clients/city-client.service';
import { WeatherClient } from '../../clients/weather.client';
import { CurrentWeatherData } from '../../models/weather-models';

@Component({
    selector: 'app-current-weather-page',
    imports: [
        DatePipe,
    ],
    templateUrl: './current-weather-page.html',
    styleUrl: './current-weather-page.scss',
})
export class CurrentWeatherPage {
    private weatherClient = inject(WeatherClient);
    private cityClient = inject(CityClient);

    public weatherData: Signal<CurrentWeatherData | null>;

    constructor() {
        const weather$ = this.cityClient.getAll().pipe(
            map(cities => cities[2]),
            map(city => city.id),
            switchMap(id => this.weatherClient.getCurrentWeather(id)),
        )

        this.weatherData = toSignal(weather$, { initialValue: null });
    }
}
