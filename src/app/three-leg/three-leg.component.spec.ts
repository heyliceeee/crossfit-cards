import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLegComponent } from './three-leg.component';

describe('ThreeLegComponent', () => {
  let component: ThreeLegComponent;
  let fixture: ComponentFixture<ThreeLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeLegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
