import { DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WeatherClient } from '../../clients/weather.client';
import { CurrentWeatherData } from '../../models/weather-models';

@Component({
    selector: 'app-current-weather-page',
    imports: [
        DatePipe,
    ],
    templateUrl: './city-page.component.html',
    styleUrl: './city-page.component.scss',
})
export class CityPage implements OnInit {
    private platformId = inject(PLATFORM_ID);
    private isBrowser = isPlatformBrowser(this.platformId);

    private weatherClient = inject(WeatherClient);
    private destroyRef = inject(DestroyRef);

    @Input()
    public cityId: number = null!;

    public weatherData = signal<CurrentWeatherData | null>(null);

    public ngOnInit(): void {
        this.weatherClient
            .getCurrentWeather(this.cityId)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
            ).subscribe(
            weather => this.weatherData.set(weather),
        );

        if (!this.isBrowser) {
            return;
        }

        localStorage.setItem('cityId', this.cityId.toString());
    }
}
