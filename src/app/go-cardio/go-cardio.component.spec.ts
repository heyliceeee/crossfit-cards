import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCardioComponent } from './go-cardio.component';

describe('GoCardioComponent', () => {
  let component: GoCardioComponent;
  let fixture: ComponentFixture<GoCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
