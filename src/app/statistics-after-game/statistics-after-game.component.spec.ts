import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsAfterGameComponent } from './statistics-after-game.component';

describe('StatisticsAfterGameComponent', () => {
  let component: StatisticsAfterGameComponent;
  let fixture: ComponentFixture<StatisticsAfterGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsAfterGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsAfterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
