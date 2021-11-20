import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioTrainingComponent } from './cardio-training.component';

describe('CardioTrainingComponent', () => {
  let component: CardioTrainingComponent;
  let fixture: ComponentFixture<CardioTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
