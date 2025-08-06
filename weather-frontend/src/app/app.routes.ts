import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'choose-city',
        pathMatch: 'full',
        loadComponent: () => import('./pages/choose-city-page/choose-city-page').then(c => c.ChooseCityPage),
    },
    {
        path: ':cityId',
        loadComponent: () => import('./pages/weather-page/weather-page.component').then(c => c.WeatherPage),
    },
];
