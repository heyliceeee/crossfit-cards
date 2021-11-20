import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCardioComponent } from './one-cardio.component';

describe('OneCardioComponent', () => {
  let component: OneCardioComponent;
  let fixture: ComponentFixture<OneCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
