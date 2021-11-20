import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCoreComponent } from './one-core.component';

describe('OneCoreComponent', () => {
  let component: OneCoreComponent;
  let fixture: ComponentFixture<OneCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
