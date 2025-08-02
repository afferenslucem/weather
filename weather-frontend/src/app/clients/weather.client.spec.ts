import { TestBed } from '@angular/core/testing';

import { WeatherClient } from './weather.client';

describe('WeatherClient', () => {
  let service: WeatherClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
