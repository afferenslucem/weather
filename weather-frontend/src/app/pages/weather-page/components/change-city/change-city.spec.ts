import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCity } from './change-city';

describe('ChangeCity', () => {
  let component: ChangeCity;
  let fixture: ComponentFixture<ChangeCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
