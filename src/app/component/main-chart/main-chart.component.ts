import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexMarkers
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  stroke: ApexStroke
  legend: ApexLegend
  markers: ApexMarkers
  dataLabels:ApexDataLabels
};

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent {

  title = "Finish Product"
  subtitle = "Finish product annually"

  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Roaster 3kg",
          data: [10, 20, 15, 18, 23, 47, 31, 56, 61]
        },
        {
          name: "Roaster 5kg",
          data: [5, 6, 11, 13, 9, 12, 14, 25, 36]
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
      markers: {
        size: 5,
      },
      xaxis: {
        categories:[2014, 2015,  2016,  2017,  2018,  2019,  2020,  2021, 2022]
      }
    }
  }

}
