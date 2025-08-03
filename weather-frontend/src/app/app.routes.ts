import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/current-weather-page/current-weather-page').then(c => c.CurrentWeatherPage),
    },
    {
        path: 'forecast',
        loadComponent: () => import('./pages/weather-forecast-page/weather-forecast-page').then(c => c.WeatherForecastPage),
    }
];
