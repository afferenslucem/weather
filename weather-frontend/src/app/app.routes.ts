import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app').then(c => c.App),

        children: [
            {
                path: 'choose-city',
                pathMatch: 'full',
                loadComponent: () => import('./pages/choose-city-page/choose-city-page').then(c => c.ChooseCityPage),
            },
            {
                path: ':cityId',
                loadComponent: () => import('./pages/current-weather-page/city-page.component').then(c => c.CityPage),
            },
        ]
    },
];
