import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    {
        path: 'choose-city',
        pathMatch: 'full',
        loadComponent: () => import('./pages/choose-city-page/choose-city-page').then(c => c.ChooseCityPage),
    },
    {
        path: 'weather/:cityId',
        loadComponent: () => import('./pages/weather-page/weather-page.component').then(c => c.WeatherPage),
    },
    {
        path: '',
        component: App
    },
];
