import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUpperBodyComponent } from './one-upper-body.component';

describe('OneUpperBodyComponent', () => {
  let component: OneUpperBodyComponent;
  let fixture: ComponentFixture<OneUpperBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneUpperBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneUpperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
