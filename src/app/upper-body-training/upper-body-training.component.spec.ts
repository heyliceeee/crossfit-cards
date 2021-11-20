import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperBodyTrainingComponent } from './upper-body-training.component';

describe('UpperBodyTrainingComponent', () => {
  let component: UpperBodyTrainingComponent;
  let fixture: ComponentFixture<UpperBodyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperBodyTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperBodyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
