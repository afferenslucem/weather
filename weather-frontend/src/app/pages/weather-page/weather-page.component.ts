import { Component, Input } from '@angular/core';
import { ChangeCity } from './components/change-city/change-city';
import { CurrentWeather } from './components/current-weather/current-weather';
import { Forecast } from './components/forecast/forecast';

@Component({
    selector: 'weather-page',
    imports: [
        CurrentWeather,
        Forecast,
        ChangeCity,
    ],
    templateUrl: './weather-page.component.html',
    styleUrl: './weather-page.component.scss',
})
export class WeatherPage {
    @Input()
    public cityId: number = null!;
}
