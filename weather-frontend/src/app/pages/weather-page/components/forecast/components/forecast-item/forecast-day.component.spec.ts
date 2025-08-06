import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDay } from './forecast-day.component';

describe('ForecastItem', () => {
  let component: ForecastDay;
  let fixture: ComponentFixture<ForecastDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
