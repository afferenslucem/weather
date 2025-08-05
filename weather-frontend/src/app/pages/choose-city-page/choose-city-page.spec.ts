import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCityPage } from './choose-city-page';

describe('ChooseCityPage', () => {
  let component: ChooseCityPage;
  let fixture: ComponentFixture<ChooseCityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseCityPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
