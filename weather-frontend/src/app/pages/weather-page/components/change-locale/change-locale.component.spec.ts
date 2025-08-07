import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLocale } from './change-locale.component';

describe('ChangeCity', () => {
  let component: ChangeLocale;
  let fixture: ComponentFixture<ChangeLocale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeLocale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLocale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
