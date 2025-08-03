import { DatePipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
    private client = inject(WeatherClient);

    public forecastData: Signal<WeatherForecastData | null>;

    constructor() {
        this.forecastData = toSignal(this.client.getForecast(), { initialValue: null });
    }
}
