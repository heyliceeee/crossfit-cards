import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTrainingComponent } from './global-training.component';

describe('GlobalTrainingComponent', () => {
  let component: GlobalTrainingComponent;
  let fixture: ComponentFixture<GlobalTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
