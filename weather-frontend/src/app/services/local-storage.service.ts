import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public setCityId(id: string): void {
        localStorage.setItem('cityId', id.toString());
    }

    public getCityId(): string | null {
        return localStorage.getItem('cityId');
    }

    public setLang(locale: 'ru' | 'en'): void {
        localStorage.setItem('locale', locale);
    }

    public getLocale(): 'ru' | 'en' | null {
        return localStorage.getItem('locale') as 'ru' | 'en';
    }
}