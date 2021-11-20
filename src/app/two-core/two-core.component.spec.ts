import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCoreComponent } from './two-core.component';

describe('TwoCoreComponent', () => {
  let component: TwoCoreComponent;
  let fixture: ComponentFixture<TwoCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
