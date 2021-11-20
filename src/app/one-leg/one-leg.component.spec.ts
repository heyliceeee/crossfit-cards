import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLegComponent } from './one-leg.component';

describe('OneLegComponent', () => {
  let component: OneLegComponent;
  let fixture: ComponentFixture<OneLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
