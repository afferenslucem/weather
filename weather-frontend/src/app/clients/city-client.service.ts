import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { SupportedCity } from '../models/models';

@Injectable({
    providedIn: 'root',
})
export class CityClient {
    private httpClient = inject(HttpClient);

    public getAll(): Observable<SupportedCity[]> {
        return this.httpClient.get<unknown[]>('/city/all').pipe(
            map(data => plainToInstance(SupportedCity, data)),
        );
    }
}

