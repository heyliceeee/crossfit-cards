import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLegComponent } from './two-leg.component';

describe('TwoLegComponent', () => {
  let component: TwoLegComponent;
  let fixture: ComponentFixture<TwoLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
