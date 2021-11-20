import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardioComponent } from './two-cardio.component';

describe('TwoCardioComponent', () => {
  let component: TwoCardioComponent;
  let fixture: ComponentFixture<TwoCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
