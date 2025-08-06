import { Component, DestroyRef, inject, Input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import _ from 'declarray';
import { map, Observable } from 'rxjs';
import { WeatherClient } from '../../../../clients/weather.client';
import { ForecastDay } from './components/forecast-item/forecast-day.component';
import { ForecastItem } from './models/forecast-item';
import { ForecastItem as ForecastWeatherData } from '../../../../models/weather-models';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.html',
    styleUrl: './forecast.scss',
    imports: [
        ForecastDay,
    ],
})
export class Forecast implements OnInit {
    private weatherClient = inject(WeatherClient);
    private destroyRef = inject(DestroyRef);

    @Input({ required: true })
    public cityId: number = null!;

    public forecastData = signal<ForecastItem[] | null>(null);

    public ngOnInit(): void {
        this.getForecast().subscribe(data => this.forecastData.set(data));
    }

    private getForecast(): Observable<ForecastItem[]> {
        return this.weatherClient
            .getForecast(this.cityId)
            .pipe(
                map(data => this.readForecast(data.forecastItems!)),
                takeUntilDestroyed(this.destroyRef),
            );
    }

    private readForecast(data: ForecastWeatherData[]): ForecastItem[] {
        const weatherByDays = _(data).groupBy(item => item.forecastTime.getDay()).skip(1);

        const result = weatherByDays.select(({ group }) => ({
            night: group.last(),
            day: group.firstOrDefault(item => item.forecastTime.getHours() > 12),
        }))
            .where(item => item.day != null && item.night != null)
            .toArray();

        return result;
    }
}
