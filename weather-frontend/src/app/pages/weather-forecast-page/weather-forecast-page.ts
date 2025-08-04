import { DatePipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { CityClient } from '../../clients/city-client.service';
import { WeatherClient } from '../../clients/weather.client';
import { WeatherForecastData } from '../../models/weather-models';

@Component({
    selector: 'app-weather-forecast-page',
    imports: [
        DatePipe,
    ],
    templateUrl: './weather-forecast-page.html',
    styleUrl: './weather-forecast-page.scss',
})
export class WeatherForecastPage {
    private weatherClient = inject(WeatherClient);
    private cityClient = inject(CityClient);

    public forecastData: Signal<WeatherForecastData | null>;

    constructor() {
        const forecast$ = this.cityClient.getAll().pipe(
            map(cities => cities[1]),
            map(city => city.id),
            switchMap(id => this.weatherClient.getForecast(id)),
        )

        this.forecastData = toSignal(forecast$, { initialValue: null });
    }
}
