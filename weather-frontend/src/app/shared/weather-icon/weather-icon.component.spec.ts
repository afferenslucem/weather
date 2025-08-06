import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIcon } from './weather-icon.component';

describe('Icon', () => {
  let component: WeatherIcon;
  let fixture: ComponentFixture<WeatherIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
