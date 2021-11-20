import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeUpperBodyComponent } from './three-upper-body.component';

describe('ThreeUpperBodyComponent', () => {
  let component: ThreeUpperBodyComponent;
  let fixture: ComponentFixture<ThreeUpperBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeUpperBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeUpperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
