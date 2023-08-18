import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexGrid
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  stroke: ApexStroke
  legend: ApexLegend
  grid:ApexGrid
  dataLabels:ApexDataLabels
};

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent {

  title = "Overall Sales"

  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "sales",
          data: [10, 20, 15, 18, 23, 47, 31, 56, 61]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show:false
        }
      },
      dataLabels: {
        enabled:false
      },
      grid: {
        show:false
      },
      xaxis: {
        categories:[2014, 2015,  2016,  2017,  2018,  2019,  2020,  2021, 2022]
      }
    }
  }

}
