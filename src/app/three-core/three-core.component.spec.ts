import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCoreComponent } from './three-core.component';

describe('ThreeCoreComponent', () => {
  let component: ThreeCoreComponent;
  let fixture: ComponentFixture<ThreeCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
