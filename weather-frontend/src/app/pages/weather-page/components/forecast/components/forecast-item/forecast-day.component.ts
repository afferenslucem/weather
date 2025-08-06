import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ForecastItem as ForecastWeatherData } from '../../../../../../models/weather-models';
import { TemperaturePipe } from '../../../../../../pipes/temperature-pipe';
import { WeatherIcon } from '../../../../../../shared/weather-icon/weather-icon.component';
import { ForecastItem } from '../../models/forecast-item';

@Component({
    selector: 'app-forecast-item',
    templateUrl: './forecast-day.component.html',
    styleUrl: './forecast-day.component.scss',
    imports: [
        DatePipe,
        TemperaturePipe,
        WeatherIcon,
    ],
})
export class ForecastDay {
    @Input({ required: true })
    public forecastItem: ForecastItem = null!;

    public get day(): ForecastWeatherData {
        return this.forecastItem.day;
    }

    public get night(): ForecastWeatherData {
        return this.forecastItem.night;
    }
}
