import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHomepageComponent } from './training-homepage.component';

describe('TrainingHomepageComponent', () => {
  let component: TrainingHomepageComponent;
  let fixture: ComponentFixture<TrainingHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
