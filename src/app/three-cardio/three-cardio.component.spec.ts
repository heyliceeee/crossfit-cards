import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardioComponent } from './three-cardio.component';

describe('ThreeCardioComponent', () => {
  let component: ThreeCardioComponent;
  let fixture: ComponentFixture<ThreeCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
