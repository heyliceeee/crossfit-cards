import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLegComponent } from './go-leg.component';

describe('GoLegComponent', () => {
  let component: GoLegComponent;
  let fixture: ComponentFixture<GoLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoLegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
