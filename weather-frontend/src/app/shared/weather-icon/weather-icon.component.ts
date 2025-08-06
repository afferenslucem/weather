import { Component, computed, input, Signal } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.scss',
  imports: [
    Icon,
  ],
})
export class WeatherIcon {
    private codeNameMap: Record<string, string> = {
        ['01d']: 'sunny',
        ['02d']: 'cloudy-sun',
        ['03d']: 'cloudy',
        ['04d']: 'extra-cloudy',
        ['09d']: 'rainfall',
        ['10d']: 'rainfall',
        ['11d']: 'storm',
        ['13d']: 'snowfall',
        ['50d']: 'cloudy',
    };

    public code = input.required<string>();

    public name: Signal<string>;

    constructor() {
        this.name = computed(() => this.codeNameMap[this.code()]);
    }
}
