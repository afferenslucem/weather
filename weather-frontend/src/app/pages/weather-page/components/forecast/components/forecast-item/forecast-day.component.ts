import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Skeleton } from '../../../../../../directives/skeleton';
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
        Skeleton,
        TranslatePipe,
    ],
})
export class ForecastDay {
    @Input({ required: true })
    public forecastItem: ForecastItem | null = null;

    public get day(): ForecastWeatherData | null {
        return this.forecastItem?.day ?? null;
    }

    public get night(): ForecastWeatherData | null {
        return this.forecastItem?.night ?? null;
    }

    public get iconCode(): string {
        return this.day?.weatherConditions?.[0]?.iconCode ?? ''
    }
}
