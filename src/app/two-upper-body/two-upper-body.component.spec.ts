import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoUpperBodyComponent } from './two-upper-body.component';

describe('TwoUpperBodyComponent', () => {
  let component: TwoUpperBodyComponent;
  let fixture: ComponentFixture<TwoUpperBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoUpperBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoUpperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
