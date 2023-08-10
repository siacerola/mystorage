import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLineChartComponent } from './three-line-chart.component';

describe('ThreeLineChartComponent', () => {
  let component: ThreeLineChartComponent;
  let fixture: ComponentFixture<ThreeLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeLineChartComponent]
    });
    fixture = TestBed.createComponent(ThreeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
