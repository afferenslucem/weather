import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastPage } from './weather-forecast-page';

describe('WeatherForecastPage', () => {
  let component: WeatherForecastPage;
  let fixture: ComponentFixture<WeatherForecastPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherForecastPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
