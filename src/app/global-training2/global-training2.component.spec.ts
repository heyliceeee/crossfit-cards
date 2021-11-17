import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTraining2Component } from './global-training2.component';

describe('GlobalTraining2Component', () => {
  let component: GlobalTraining2Component;
  let fixture: ComponentFixture<GlobalTraining2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTraining2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTraining2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
