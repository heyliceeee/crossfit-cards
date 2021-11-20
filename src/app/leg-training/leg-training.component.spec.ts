import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegTrainingComponent } from './leg-training.component';

describe('LegTrainingComponent', () => {
  let component: LegTrainingComponent;
  let fixture: ComponentFixture<LegTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
