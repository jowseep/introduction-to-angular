import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingResultComponent } from './housing-result.component';

describe('HousingResultComponent', () => {
  let component: HousingResultComponent;
  let fixture: ComponentFixture<HousingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
