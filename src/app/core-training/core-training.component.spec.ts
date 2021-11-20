import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTrainingComponent } from './core-training.component';

describe('CoreTrainingComponent', () => {
  let component: CoreTrainingComponent;
  let fixture: ComponentFixture<CoreTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
