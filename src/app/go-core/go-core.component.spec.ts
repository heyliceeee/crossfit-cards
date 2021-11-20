import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCoreComponent } from './go-core.component';

describe('GoCoreComponent', () => {
  let component: GoCoreComponent;
  let fixture: ComponentFixture<GoCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
