import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { WeatherClient } from '../../../../clients/weather.client';
import { Skeleton } from '../../../../directives/skeleton';
import { CurrentWeatherData } from '../../../../models/weather-models';
import { TemperaturePipe } from '../../../../pipes/temperature-pipe';
import { Icon } from '../../../../shared/icon/icon';
import { WeatherIcon } from '../../../../shared/weather-icon/weather-icon.component';

@Component({
    selector: 'app-current-weather',
    imports: [
        Icon,
        WeatherIcon,
        TemperaturePipe,
        Skeleton,
        TranslatePipe,
    ],
    templateUrl: './current-weather.html',
    styleUrl: './current-weather.scss',
})
export class CurrentWeather implements OnInit {
    private platformId = inject(PLATFORM_ID);
    private isBrowser = isPlatformBrowser(this.platformId);

    private weatherClient = inject(WeatherClient);
    private destroyRef = inject(DestroyRef);

    @Input({required: true})
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
