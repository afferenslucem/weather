import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPage } from './city-page.component';

describe('CurrentWeatherPage', () => {
  let component: CityPage;
  let fixture: ComponentFixture<CityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
