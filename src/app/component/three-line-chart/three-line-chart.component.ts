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
}

@Component({
  selector: 'app-three-line-chart',
  templateUrl: './three-line-chart.component.html',
  styleUrls: ['./three-line-chart.component.css']
})
export class ThreeLineChartComponent {

  title = "Cash Flow"
  subtitle=""

  chartOptions :Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show:false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      }
    }
  }
}
