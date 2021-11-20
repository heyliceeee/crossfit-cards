import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUpperBodyComponent } from './go-upper-body.component';

describe('GoUpperBodyComponent', () => {
  let component: GoUpperBodyComponent;
  let fixture: ComponentFixture<GoUpperBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoUpperBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoUpperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
