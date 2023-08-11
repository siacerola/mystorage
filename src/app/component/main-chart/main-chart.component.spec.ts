import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChartComponent } from './main-chart.component';

describe('MainChartComponent', () => {
  let component: MainChartComponent;
  let fixture: ComponentFixture<MainChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainChartComponent]
    });
    fixture = TestBed.createComponent(MainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
