import { DatePipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
    private client = inject(WeatherClient);

    public weatherData: Signal<CurrentWeatherData | null>;

    constructor() {
        this.weatherData = toSignal(this.client.getCurrentWeather(), { initialValue: null });
    }
}
