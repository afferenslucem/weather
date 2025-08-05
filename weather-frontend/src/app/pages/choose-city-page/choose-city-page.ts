import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { CityClient } from '../../clients/city-client.service';
import { Button } from '../../directives/button';
import { SupportedCity } from '../../models/models';

@Component({
    selector: 'app-choose-city-page',
    templateUrl: './choose-city-page.html',
    styleUrl: './choose-city-page.scss',
    imports: [
        RouterLink,
        Button,
    ],
})
export class ChooseCityPage {
    private cityClient = inject(CityClient);

    public cities: Signal<SupportedCity[] | null>;

    constructor() {
        const cities$ = this.cityClient.getAll();

        this.cities = toSignal(cities$, { initialValue: null });
    }
}
